import { Box, Container, Flex } from "@radix-ui/themes";
import { useCallback, useState } from "react";
import Image from "next/image";
import TextareaAutosize from "react-textarea-autosize";
import { createFunnelSteps, useFunnel } from "@use-funnel/browser";
import { ThreePeriodFormProps } from "../model";
import { HomeFunnelContext } from "@/src/pages/home/ui/home-page";

type ThreePeriodFunnelContext = Pick<
  HomeFunnelContext,
  "retroType" | "retroAnswer1" | "retroAnswer2" | "retroAnswer3"
>;

const steps = createFunnelSteps<Partial<ThreePeriodFunnelContext>>()
  .extends("SELECT")
  .extends("ANSWER", { requiredKeys: ["retroType"] })
  .build();

type ThreePeriodProps = {
  homeContext: Omit<HomeFunnelContext, keyof ThreePeriodFunnelContext>;
  onComplete: (context: ThreePeriodFunnelContext) => void;
};
const ThreePeriod = ({ homeContext, onComplete }: ThreePeriodProps) => {
  const formFunnel = useFunnel({
    id: "three-period-funnel",
    steps,
    initial: {
      step: "SELECT",
      context: {},
    },
  });

  const [retroType, setRetroType] = useState<
    ThreePeriodFormProps["type"] | null
  >(null);

  return (
    <Container className="mx-[19px]">
      <formFunnel.Render
        SELECT={({ history }) => (
          <>
            <h1 className="font-[family-name:var(--font-school_safety_chalkboard_eraser)] text-[64px] text-center text-[#fff]">
              3교시 회고 시간
            </h1>
            <p className="text-[32px] text-center text-[#fff] font-semibold mb-[40px] mt-[57px]">
              24년을 돌아보며 종아리를 걷는 시간,
              <br />
              어떤 회초리를 원하시나요?
            </p>
            <Box as="div">
              <Flex
                onClick={() => setRetroType("KPT")}
                className={`flex flex-row border-2 p-[26px] rounded-lg cursor-pointer transition-all duration-300 hover:border-white/40
                  ${
                    retroType === "KPT"
                      ? "border-[#93C5FD] bg-white/10"
                      : "border-white/20"
                  }`}
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

            {/* YWT 회고 */}
            <Box as="div" className="mt-[26px]">
              <Flex
                onClick={() => setRetroType("YWT")}
                className={`flex flex-row border-2 p-[26px] rounded-lg cursor-pointer transition-all duration-300 hover:border-white/40
                  ${
                    retroType === "YWT"
                      ? "border-[#86EFAC] bg-white/10"
                      : "border-white/20"
                  }`}
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
                    YWT 회고
                  </p>
                  <span className="text-[#86EFAC] text-[18px] font-semibold">
                    Yet(한 일), Want(하고 싶었던 일), Try(앞으로 시도할 일)
                    <br />
                    간단하고 효과적인 마법 지팡이
                  </span>
                </Box>
              </Flex>
            </Box>

            <div className="flex items-end flex-col mt-[67px] mr-[24px]">
              <button
                onClick={() => {
                  if (retroType) {
                    history.push("ANSWER", { retroType });
                  }
                }}
                disabled={!retroType}
                className={`h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px]
                  ${
                    retroType
                      ? "bg-[#5A3625] cursor-pointer"
                      : "bg-[#5A3625]/50 cursor-not-allowed"
                  }`}
              >
                NEXT
              </button>
              <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
            </div>
          </>
        )}
        ANSWER={({ context }) => (
          <ThreePeriodForm
            type={context.retroType}
            homeContext={homeContext}
            onComplete={onComplete}
          />
        )}
      />
    </Container>
  );
};

export default ThreePeriod;

const ThreePeriodForm = ({
  type,
  onComplete,
}: ThreePeriodFormProps & ThreePeriodProps) => {
  const [answers, setAnswers] = useState<
    Pick<
      ThreePeriodFunnelContext,
      "retroAnswer1" | "retroAnswer2" | "retroAnswer3"
    >
  >({
    retroAnswer1: "",
    retroAnswer2: "",
    retroAnswer3: "",
  });

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

  const isAllAnswered = useCallback(() => {
    return Object.values(answers).every((answer) => answer.trim().length > 0);
  }, [answers]);

  const handleAnswerChange = useCallback((index: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`retroAnswer${index + 1}`]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    if (isAllAnswered()) {
      onComplete({ ...answers, retroType: type });
    }
  }, [answers, isAllAnswered, onComplete, type]);

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
              maxRows={10}
              className="w-full min-h-[100px] bg-transparent border-2 border-white/20 rounded-lg p-4 text-white mt-2"
              placeholder="여기에 입력해주세요..."
              value={answers[`retroAnswer${index + 1}` as keyof typeof answers]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </Box>
        </article>
      ))}

      <div className="flex items-end flex-col mt-[67px] mr-[24px]">
        <button
          onClick={handleSubmit}
          disabled={!isAllAnswered()}
          className={`h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px]
            ${
              isAllAnswered()
                ? "bg-[#5A3625] cursor-pointer"
                : "bg-[#5A3625]/50 cursor-not-allowed"
            }`}
        >
          SUBMIT
        </button>
        <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
      </div>
      <footer className="bg-[#7C553E] h-[50px] flex justify-center items-center">
        <p className="text-[#fff] text-[12px] font-medium">
          Powered by Whateverchallenge
        </p>
      </footer>
    </Container>
  );
};
