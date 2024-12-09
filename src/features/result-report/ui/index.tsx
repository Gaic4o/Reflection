import { HomeFunnelContext } from "@/src/pages/home/ui/home-page";
import { Box, Container, Flex } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useState } from "react";

import { fetchFeedback, fetchRetroContext, fetchShare } from "../api";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingFeedback, LoadingSpinner } from "./result-loading";

interface ResultReportProps {
  mainContext: HomeFunnelContext;
}

interface FeedbackResponse {
  goodPoint: string;
  improvement: string;
  cheerUp: string;
  feelingWhether: string;
}

const ResultReport = ({ mainContext }: ResultReportProps) => {
  const [retroContext, setRetroContext] = useState<string>("");
  const [feedback, setFeedback] = useState<FeedbackResponse | null>(null);
  const [isLoadingRetro, setIsLoadingRetro] = useState(true);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoadingRetro(true);
        const context = await fetchRetroContext(mainContext);

        if (!isMounted) return;

        if (context) {
          setRetroContext(context);
          setIsLoadingRetro(false);
          setIsLoadingFeedback(true);

          const feedbackData = await fetchFeedback(context);

          if (!isMounted) return;

          if (feedbackData) {
            setFeedback(feedbackData);
          }
        }
      } finally {
        if (isMounted) {
          setIsLoadingRetro(false);
          setIsLoadingFeedback(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [mainContext]);

  const handleShare = async () => {
    if (!retroContext || !feedback) return;

    const shareData = {
      context: retroContext,
      teacherNm: mainContext.teacherNm,
      goodPoint: feedback.goodPoint,
      improvement: feedback.improvement,
      cheerUp: feedback.cheerUp,
      feelingWhether: feedback.feelingWhether,
    };

    try {
      const uuid = await fetchShare(shareData);

      if (uuid) {
        // URL에 uuid 추가
        const shareUrl = `${window.location.origin}/share/${uuid}`;

        // 클립보드에 복사
        await navigator.clipboard.writeText(shareUrl);

        // 사용자에게 알림
        alert("공유 링크가 클립보드에 복사되었습니다!");
      }
    } catch (error) {
      console.error("Failed to share:", error);
      alert("공유하기에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container className="px-[32px] mt-[95px]">
      <AnimatePresence>
        {isLoadingRetro ? (
          <LoadingSpinner />
        ) : isLoadingFeedback ? (
          <LoadingFeedback />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-center text-[#fff] mb-[40px] text-[36px] font-semibold">
              24년 회고 일기장을 확인해보세요!
            </h1>
            {/* 30초 -> 1분 */}
            <article className="py-[16px] rounded-[8px] px-[26px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
              <h2 className="text-[#fff] text-[24px] font-semibold">
                24년 감정 날씨
              </h2>
              <Flex className="flex flex-row mt-[33px] items-center justify-center">
                <div className="flex flex-col justify-center items-center mr-[36px]">
                  <p className="text-[#fff] text-[16px] mt-[10px] w-[28px] font-semibold">
                    {feedback?.feelingWhether}
                  </p>
                </div>
                <p className="text-[18px] font-semibold text-[#fff]">
                  즐거운일을 잔뜩 경험하고, 새로운 도전을 통해서 스스로를 더 잘
                  이해한 당신의 감정 날씨는 맑음이에요.
                </p>
              </Flex>
            </article>

            <article className="mt-[40px] mb-[40px] py-[22px] px-[26px] rounded-[8px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
              <h2 className="mb-[12px] text-[24px] font-semibold text-[#fff]">
                24년 회고 일기
              </h2>
              <p className="text-[18px] leading-[2] text-[#fff]">
                {retroContext}
              </p>
            </article>

            <article className="py-[31px] px-[26px] rounded-[8px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
              <Flex className="flex flex-row items-center mb-[27px]">
                <Image
                  src="/home/img/start-3.webp"
                  className="rounded-full mr-[35px]"
                  alt=""
                  width={96}
                  height={96}
                />
                <p className="text-[24px] text-[#fff] font-semibold">
                  김덕배 선생님 피드백
                </p>
              </Flex>

              <Box className="rounded-[8px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
                <Flex className="flex flex-row mb-[13px]">
                  <Image
                    src="/home/svg/feedback-1.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                  />
                  <p className="text-[24px] ml-[9px] text-[#fff] font-semibold">
                    잘한 점
                  </p>
                </Flex>
                <p className="text-[18px] font-semibold text-[#fff]">
                  {feedback?.goodPoint}
                </p>
              </Box>

              <Box className="rounded-[8px] mt-[13px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
                <Flex className="flex flex-row mb-[13px]">
                  <Image
                    src="/home/svg/feedback-2.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                  />
                  <p className="text-[24px] ml-[9px] text-[#fff] font-semibold">
                    개선하면 좋을 점
                  </p>
                </Flex>
                <p className="text-[18px] font-semibold text-[#fff]">
                  {feedback?.improvement}
                </p>
              </Box>

              <Box className="rounded-[8px] mt-[13px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]">
                <Flex className="flex flex-row mb-[13px]">
                  <Image
                    src="/home/svg/feedback-3.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                  />
                  <p className="text-[24px] ml-[9px] text-[#fff] font-semibold">
                    25년 응원 메시지
                  </p>
                </Flex>
                <p className="text-[18px] font-semibold text-[#fff]">
                  {feedback?.cheerUp}
                </p>
              </Box>
            </article>

            <Container className="flex justify-center items-center">
              <p className="mt-[86px] mb-[83px] text-center text-[#fff] text-[36px]">
                함께 성장할 수 있도록
                <br />
                나눠볼까요?
              </p>
              <button
                onClick={handleShare}
                className="m-auto rounded-[4px] flex flex-row justify-center items-center text-[24px] font-semibold bg-[#fff] h-[40px] w-[129px]"
              >
                <Image
                  src="/home/svg/feedback-link.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="mr-[9.4px]"
                />
                공유하기
              </button>
            </Container>
            <div className="flex items-end flex-col mt-[67px] mr-[24px]">
              <button className="h-[50px] w-[218px] text-[#fff] text-[30px] bg-[#5A3625] font-medium rounded-t-[40px]">
                Submit
              </button>
              <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <footer className="bg-[#7C553E] h-[50px] flex justify-center items-center">
        <p className="text-[#fff] text-[12px] font-medium">
          Powered by Whateverchallenge
        </p>
      </footer>
    </Container>
  );
};

export default ResultReport;
