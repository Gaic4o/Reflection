export type StepData = {
  imageSrc: string;
  options: string[];
  title: string;
  correctAnswer: number;
};

export type FunnelSteps = {
  SecondOne: { checkOne: number };
  SecondTwo: { checkTwo: number };
  SecondThree: { checkThree: number };
  SecondFour: { checkFour: number };
  SecondFive: { checkFive: number };
  SecondSix: { checkSix: number };
  SecondSeven: { checkSeven: number };
  SecondEight: { checkEight: number };
  SecondNine: { checkNine: number };
  SecondTen: { checkTen: number };
};
