import { Box, Container, Flex } from "@radix-ui/themes";
import { useCallback, useState } from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import { useFunnel } from "@use-funnel/browser";
import { ThreePeriodFormProps } from "../model";

type ThreePeriodFunnelSteps = {
  SELECT: {};
  KPT: {};
  YWT: {};
};

const ThreePeriod = () => {
  const funnel = useFunnel<ThreePeriodFunnelSteps>({
    id: "three-period-funnel",
    initial: {
      step: "SELECT",
      context: {},
    },
  });

  const [retrospect, setRetrospect] = useState(null);

  const handleSelect = useCallback((retrospect: any) => {
    setRetrospect((prev) => (prev === retrospect ? null : retrospect));
  }, []);
  return (
    <funnel.Render
      SELECT={({ history }) => (
        <Container className="mx-[19px]">
          <h1 className="font-[family-name:var(--font-school_safety_chalkboard_eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
            3교시 회고하기
          </h1>
          <p className="text-[32px] text-center text-[#fff] font-semibold mb-[40px] mt-[57px]">
            24년을 돌아보며 종아리를 걷는 시간,
            <br />
            어떤 회초리를 원하시나요?
          </p>

          <Box as="div">
            <Flex
              className={`flex flex-row border-2 p-[26px] border-white/20 rounded-lg cursor-pointer transition-all duration-300 hover:border-white/40`}
            >
              <Image
                src={"/home/svg/retrospect-one.svg"}
                aria-label="none"
                className="rounded-full mr-[37px]"
                alt=""
                width={47}
                height={48}
              />

              <Box>
                <p className="text-[#93C5FD] text-[20px] font-semibold mb-[7px]">
                  KPT 회고
                </p>
                <span className="text-[#93C5FD] text-[18px] font-semibold">
                  Keep(유지할 점), Problem(문제점), Try(시도할 점)를
                  <br />
                  통해 개선점을 도출하는 묵직한 야구방망이
                </span>
              </Box>
            </Flex>
          </Box>

          <Box as="div" className="mt-[26px]">
            <Flex
              className={`flex flex-row border-2 p-[26px] border-white/20 rounded-lg cursor-pointer transition-all duration-300 hover:border-white/40`}
            >
              <Image
                src={"/home/svg/retrospect-two.svg"}
                aria-label="none"
                className="rounded-full mr-[37px]"
                alt=""
                width={47}
                height={48}
              />

              <Box>
                <p className="text-[#86EFAC] text-[20px] font-semibold mb-[7px]">
                  KPT 회고
                </p>
                <span className="text-[#86EFAC]  text-[18px] font-semibold">
                  Keep(유지할 점), Problem(문제점), Try(시도할 점)를
                  <br />
                  통해 개선점을 도출하는 묵직한 야구방망이
                </span>
              </Box>
            </Flex>
          </Box>
          <div className="flex items-end flex-col mt-[67px] mr-[24px]">
            <button
              onClick={() => history.push("YWT")}
              className="h-[50px] w-[218px] text-[#fff] text-[30px] bg-[#5A3625] font-medium rounded-t-[40px]"
            >
              NEXT
            </button>
            <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
          </div>
        </Container>
      )}
      KPT={({ history }) => <ThreePeriodForm type="KPT" />}
      YWT={({ history }) => <ThreePeriodForm type="YWT" />}
    />
  );
};

export default ThreePeriod;

const ThreePeriodForm = ({ type }: ThreePeriodFormProps) => {
  const steps =
    type === "KPT"
      ? [
          { title: "Keep 잘한 점 정리해보기!", color: "#93C5FD" },
          { title: "Problem 아쉬웠던 것은?", color: "#F9A8D4" },
          { title: "Try 시도해보고 싶은 것은!", color: "#86EFAC" },
        ]
      : [
          { title: "Yet 어떤 일을 하셨나요?", color: "#93C5FD" },
          { title: "Want 하고 싶었던 일이 있나요?", color: "#F9A8D4" },
          { title: "Try 시도해보고 싶은 것은!", color: "#86EFAC" },
        ];

  return (
    <Container className="mx-[19px]">
      <h1 className="text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
        {type} 회고
      </h1>
      {steps.map((step, index) => (
        <article key={index}>
          <h2
            className="text-[32px] text-center font-semibold mb-[43px] mt-[85px]"
            style={{ color: step.color }}
          >
            STEP{index + 1}, {step.title}
          </h2>

          <Box>
            <label
              className="text-[24px] font-semibold"
              style={{ color: step.color }}
            >
              직군,연차별로 AI가 생성하는 질문
            </label>
            <TextareaAutosize
              className="w-full min-h-[100px] bg-transparent border-2 border-white/20 rounded-lg p-4 text-white mt-2"
              placeholder="여기에 입력해주세요..."
            />
          </Box>
        </article>
      ))}

      <div className="flex items-end flex-col mt-[67px] mr-[24px]">
        <button className="h-[50px] w-[218px] text-[#fff] text-[30px] bg-[#5A3625] font-medium rounded-t-[40px]">
          SUBMIT
        </button>
        <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
      </div>
    </Container>
  );
};

/**
 *  YWT 선택 했을 떄
 *   <Container className="mx-[19px]">
      <h1 className="text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
        YWT 회고
      </h1>
      <article>
        <h2 className="text-[32px] text-center text-[#93C5FD] font-semibold mb-[43px] mt-[85px]">
         STEP1, Yet 어떤 일을 하셨나요?
        </h2>

        <Box>
          <label className="text-[24px] text-[#93C5FD font-semibold">
            직군,연차별로 AI가 생성하는 질문
          </label>
          <textarea />
        </Box>
      </article>

      <article>
        <h2 className="text-[32px] text-center text-[#F9A8D4] font-semibold mb-[43px] mt-[85px]">
          STEP2, Want 하고 싶었던 일이 있나요?
        </h2>

        <Box>
          <label className="text-[24px] text-[#F9A8D4] font-semibold">
            직군,연차별로 AI가 생성하는 질문
          </label>
          <textarea />
        </Box>
      </article>

      <article>
        <h2 className="text-[32px] text-center text-[#86EFAC] font-semibold mb-[43px] mt-[85px]">
          STEP3, Try 시도해보고 싶은 것은!
        </h2>

        <Box>
          <label className="text-[24px] text-[#86EFAC] font-semibold">
            직군,연차별로 AI가 생성하는 질문
          </label>
          <textarea />
        </Box>
      </article>
    </Container>
 */
