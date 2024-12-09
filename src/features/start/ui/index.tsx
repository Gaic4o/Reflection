import { Box, Container } from "@radix-ui/themes";
import Image from "next/image";
import { useCallback, useState } from "react";
import { TEACHER_LIST, TeacherType } from "../model";

interface StartClassProps {
  onNext: (teacherNm: string) => void;
}

/**
 * 시작 화면 선생님을 선택할 수 있어요.
 */
const StartClass = ({ onNext }: StartClassProps) => {
  // 선택된 선생님 상태 관리
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherType>(null);

  // 선생님 선택 핸들러 - 같은 선생님을 다시 클릭하면 선택 해제
  const handleSelect = useCallback((teacher: TeacherType) => {
    setSelectedTeacher((prev) => (prev === teacher ? null : teacher));
  }, []);

  // START 버튼 클릭 핸들러
  const handleStart = useCallback(() => {
    if (!selectedTeacher) return;

    // 선택된 선생님 ID로 선생님 정보 찾기
    const selectedTeacherInfo = TEACHER_LIST.find(
      (teacher) => teacher.id === selectedTeacher
    );

    if (selectedTeacherInfo) {
      onNext(selectedTeacherInfo.name);
    }
  }, [selectedTeacher, onNext]);

  return (
    <Container className="mx-[10px] h-[100vh] bg-[#263D2F]">
      <h1 className="font-[family-name:var(--font-school_safety_chalkboard_eraser)] text-[64px] text-center text-[#fff] font-semibold mt-[69.95px] mb-[32.05px]">
        반성문을 부탁해!
      </h1>
      <p className="text-[32px] text-center text-[#fff] font-semibold mb-[80px] mt-[32.05px]">
        AI 선생님과 함께 진행하는 2024 연말회고
      </p>

      <Box as="div" className="text-[#fff]">
        {/* 선생님 목록을 순회하며 카드 컴포넌트 렌더링 */}
        {TEACHER_LIST.map((teacher, index) => (
          <div
            key={teacher.id}
            onClick={() => handleSelect(teacher.id)}
            className={`flex flex-row border-2 p-[26px] border-white/20 rounded-lg cursor-pointer
            transition-all duration-300 hover:border-white/40
            ${selectedTeacher === teacher.id ? "border-white bg-white/10" : ""}
            ${index !== TEACHER_LIST.length - 1 ? "mb-[32px]" : ""}`}
          >
            {/* 선생님 프로필 이미지 */}
            <Image
              src={teacher.imagePath}
              aria-label="none"
              className="rounded-full mr-[37px]"
              alt=""
              width={96}
              height={96}
            />

            <div className="flex flex-col">
              {/* 선생님 이름 */}
              <p className="mb-[3px] text-[24px] text-[rgba(255,255,255,0.9)] font-semibold">
                {teacher.name}
              </p>
              {/* 선생님 소개 문구 - 줄바꿈 처리 포함 */}
              <p className="text-[16px] font-semibold text-[#D1D5DB">
                {teacher.description.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < teacher.description.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </Box>

      <div className="flex items-end flex-col mt-[67px] mr-[24px] bg-[#263D2F] w-full">
        <button
          onClick={handleStart}
          disabled={!selectedTeacher}
          className={`h-[50px] w-[218px] text-[#fff] text-[30px] font-medium rounded-t-[40px]
            ${
              selectedTeacher
                ? "bg-[#5A3625] cursor-pointer"
                : "bg-[#5A3625]/50 cursor-not-allowed"
            }`}
        >
          START
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

export default StartClass;
