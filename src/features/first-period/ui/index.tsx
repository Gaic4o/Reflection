import { Box, Container } from "@radix-ui/themes";
import { useCallback, useState } from "react";
import { inputFields } from "../model";

interface FirstPeriodProps {
  onNext: (data: { userNm: string; team: string; experience: string }) => void;
}

const FirstPeriod = ({ onNext }: FirstPeriodProps) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const handleInputChange = useCallback((id: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  // 모든 입력 필드가 채워졌는지 확인
  const isAllFieldsFilled = useCallback(() => {
    return inputFields.every((field) => inputs[field.id]?.trim().length > 0);
  }, [inputs]);

  // NEXT 버튼 클릭 핸들러
  const handleNext = useCallback(() => {
    if (!isAllFieldsFilled()) return;

    onNext({
      userNm: inputs.userNm,
      team: inputs.team,
      experience: inputs.experience,
    });
  }, [inputs, isAllFieldsFilled, onNext]);

  return (
    <Container className="mx-[10px]">
      <h1 className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
        1교시 자기소개 시간
      </h1>
      <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[32px] text-center text-[#fff] font-semibold mb-[89px] mt-[37px]">
        선생님께 자기소개를 해볼까요?
      </p>

      <Container>
        {inputFields.map((field) => (
          <Box key={field.id} className="mb-[40px]">
            <p className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] text-[32px] font-semibold mb-[15px] text-[#fff]">
              {field.label}
            </p>
            <input
              className="font-[family-name:var(--font-school-safety-chalkboard-eraser)] bg-[#D1D5DB] pl-[19px] placeholder:text-[#AFAFAF] text-[30px] w-[100%] h-[70px] rounded-[15px]"
              type="text"
              value={inputs[field.id] || ""}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder={field.placeholder}
            />
          </Box>
        ))}
      </Container>
      <div className="flex items-end flex-col mt-[67px] mr-[24px]">
        <button
          onClick={handleNext}
          disabled={!isAllFieldsFilled()}
          className={`font-[family-name:var(--font-eraser-dust)] h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px]
            ${
              isAllFieldsFilled()
                ? "bg-[#5A3625] cursor-pointer"
                : "bg-[#5A3625]/50 cursor-not-allowed"
            }`}
        >
          NEXT
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

export default FirstPeriod;
