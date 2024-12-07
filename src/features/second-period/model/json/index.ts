import { StepData } from "../types";

export const stepData: Record<string, StepData> = {
  SecondOne: {
    imageSrc: "/home/img/second-1.webp",
    title: "아래 인물이 어떤말을 했는지 맞춰볼까요?",
    options: [
      "들어올거면 맞다이로 들어와",
      "물의를 일으켜 정말 죄송합니다.",
      "경매 시작합니다. 3천만원부터 시작합니다~",
      "여러분 많이 놀라셨죠? 몰래카메라였습니다~",
    ],
    correctAnswer: 0,
  },
  SecondTwo: {
    imageSrc: "/home/img/second-2.webp",
    title: "24년에 유행한 챌린지가 아닌것은?",
    options: [
      "한강 고양이 챌린지",
      "마라탕후루 챌린지",
      "슬릭백 챌린지",
      "미룬이 챌린지",
    ],
    correctAnswer: 2,
  },
  SecondThree: {
    imageSrc: "/home/img/second-3.webp",
    title: "아래의 인물들의 유행어 중 틀린 것을 고르시오",
    options: ["사과해요 나한테!", "외모 췍!", "물..물고기", "나야, 최강록"],
    correctAnswer: 3,
  },
  SecondFour: {
    imageSrc: "/home/img/second-4.webp",
    title: "다음 중 24년 개봉작이 아닌 것은?",
    options: ["서울의 봄", "파묘", "범죄도시", "인사이드아웃2"],
    correctAnswer: 0,
  },
  SecondFive: {
    imageSrc: "/home/img/second-5.webp",
    title: "올바르게 연결되지 않은 것은 무엇일까요!",
    options: [
      "장원영 - 원영적사고",
      "페이커 - 기습숭배",
      "비비 - 밤양갱",
      "지드래곤 - TOWER",
    ],
    correctAnswer: 3,
  },
};
