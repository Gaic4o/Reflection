import { Box, Container } from "@radix-ui/themes";
import { useCallback, useState } from "react";
import { inputFields } from "../model";

const FirstPeriod = () => {
  const [inputs, setInputs] = useState<Record<string, string>>({});

  const handleInputChange = useCallback((id: string, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  return (
    <Container className="mx-[10px]">
      <h1 className="font-[family-name:var(--font-school_safety_chalkboard_eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[77px] mb-[37px]">
        1교시 자기소개 시간
      </h1>
      <p className="text-[32px] text-center text-[#fff] font-semibold mb-[89px] mt-[37px]">
        선생님께 자기소개를 해볼까요?
      </p>

      <Container>
        {inputFields.map((field) => (
          <Box key={field.id} className="mb-[40px]">
            <p className="text-[32px] font-semibold mb-[15px] text-[#fff]">
              {field.label}
            </p>
            <input
              className="bg-[#D1D5DB] pl-[19px] placeholder:text-[#AFAFAF] text-[30px] w-[100%] h-[70px] rounded-[15px]"
              type="text"
              value={inputs[field.id] || ""}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              placeholder={field.placeholder}
            />
          </Box>
        ))}
      </Container>
      <div className="flex items-end flex-col mt-[67px] mr-[24px]">
        <button className="h-[50px] w-[218px] text-[#fff] text-[30px] bg-[#5A3625] font-medium rounded-t-[40px]">
          NEXT
        </button>
        <div className="h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]"></div>
      </div>
    </Container>
  );
};

export default FirstPeriod;
