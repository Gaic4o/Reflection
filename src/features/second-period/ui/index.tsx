"use client";

import { Box, Container } from "@radix-ui/themes";
import { useFunnel } from "@use-funnel/browser";
import Image from "next/image";
import { useState } from "react";
import { FunnelSteps, stepData } from "../model";

interface SecondSixProps {
  onNext: () => void;
}

const SecondPeriod = ({ onNext }: SecondSixProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const funnel = useFunnel<FunnelSteps>({
    id: "second-funnel",
    initial: {
      step: "SecondOne",
      context: { checkOne: -1 },
    },
  });

  const currentStep = funnel.step;
  const currentData = stepData[currentStep];

  const getCheckKey = (
    step: keyof FunnelSteps
  ): keyof FunnelSteps[typeof step] => {
    const checkMap: Record<string, string> = {
      SecondOne: "checkOne",
      SecondTwo: "checkTwo",
      SecondThree: "checkThree",
      SecondFour: "checkFour",
      SecondFive: "checkFive",
      SecondSix: "checkSix",
    };
    return checkMap[step] as keyof FunnelSteps[typeof step];
  };

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const steps = Object.keys(stepData) as Array<keyof FunnelSteps>;
    const currentIndex = steps.indexOf(currentStep);

    if (currentStep === "SecondSix") {
      onNext();
      return;
    }

    // 점수 계산
    if (selectedOption === currentData.correctAnswer) {
      setScore((prev) => prev + 20);
    }

    // SecondFive 이후 SecondSix로 이동
    if (currentStep === "SecondFive") {
      funnel.history.push("SecondSix", { checkSix: -1 });
      return;
    }

    const nextStep = steps[currentIndex + 1];
    const checkKey = getCheckKey(nextStep);
    const contextUpdate = {
      [checkKey]: -1,
    };
    funnel.history.push(nextStep, contextUpdate);
    setSelectedOption(null);
  };

  if (currentStep === "SecondSix") {
    return (
      <Container className="mx-[10px]">
        <h1 className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
          2교시 밈퀴즈~?
        </h1>
        <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[32px] text-center text-[#fff] font-semibold mb-[73px] mt-[37px]">
          아이스브레이킹 완료! 내 점수는?
        </p>

        <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[64px] mt-[129px] text-[#fff] font-semibold text-center">
          {score}점
        </p>
        <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[32px] mt-[87px] text-[#fff] font-semibold text-center">
          이제 회고를 시작해볼까요?
        </p>

        <div className="flex items-end flex-col mt-[62px] mr-[24px]">
          <button
            onClick={() => handleNext()}
            disabled={selectedOption === null}
            className={`font-[family-name:var(--font-eraser-dust)] h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px] transition-all duration-200 ${
              selectedOption === null
                ? "bg-[#5A362580] cursor-not-allowed"
                : "bg-[#5A3625] hover:bg-[#4A2615] cursor-pointer"
            }`}
          >
            Next
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
  }

  return (
    <Container className="mx-[10px]">
      <h1 className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] font-[family-name:var(--font-school_safety_chalkboard_eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
        2교시 밈퀴즈~?
      </h1>
      <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[32px] text-center text-[#fff] font-semibold mb-[73px] mt-[37px]">
        아래 인물이 어떤말을 했는지 맞춰볼까요?
      </p>

      <Container>
        <Image
          src={currentData.imageSrc}
          alt=""
          aria-label="hidden"
          className="m-auto"
          width={500}
          height={356.3}
        />

        <Box className="mt-[70.7px]">
          {currentData.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`font-[family-name:var(--font-school-safety-chalkboard-eraser)] p-[30px] rounded-[30px] border border-[#FFFFFF] mb-[34px] cursor-pointer transition-all duration-200 ${
                selectedOption === index
                  ? "bg-[#5A3625] border-[#5A3625]"
                  : "hover:bg-[#ffffff33]"
              }`}
            >
              <p className="text-[32px] font-semibold text-[#fff]">
                {`${index + 1}. ${option}`}
              </p>
            </div>
          ))}
        </Box>
      </Container>

      <p className="flex justify-center text-[#fff] items-center mt-[65px] text-[30px] font-medium">
        {`${Object.keys(stepData).indexOf(currentStep) + 1}/5`}
      </p>

      <div className="flex items-end flex-col mt-[62px] mr-[24px]">
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`font-[family-name:var(--font-eraser-dust)] h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px] transition-all duration-200 ${
            selectedOption === null
              ? "bg-[#5A362580] cursor-not-allowed"
              : "bg-[#5A3625] hover:bg-[#4A2615] cursor-pointer"
          }`}
        >
          {currentStep === "SecondOne" ? "START" : "Next"}
        </button>
        <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
      </div>
      <footer className="font-[family-name:var(--font-eraser-dust)] bg-[#7C553E] h-[50px] flex justify-center items-center">
        <p className="text-[#fff] text-[12px] font-medium">
          Powered by Whateverchallenge
        </p>
      </footer>
    </Container>
  );
};

export default SecondPeriod;
