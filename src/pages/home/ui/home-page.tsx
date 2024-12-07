"use client";

import { FirstPeriod } from "@/src/features/first-period";
import { ResultReport } from "@/src/features/result-report";
import { SecondPeriod } from "@/src/features/second-period";
import { StartClass } from "@/src/features/start";
import { ThreePeriod } from "@/src/features/three-period";
import { useFunnel } from "@use-funnel/browser";

export default function HomePage() {
  const memoir = useFunnel<{
    Start: { a?: string; b?: string };
    First: { a: string; b?: string };
    Two: { a: string; b?: string };
    Three: { a: string; b: string };
    Result: { a: string; b: string };
  }>({
    id: "memoir-funnel",
    initial: {
      step: "Three",
      context: {},
    },
  });

  return (
    <article className="flex m-auto flex-col justify-center  bg-[#263D2F] w-[600px]">
      <memoir.Render
        Start={({ history }) => <StartClass />}
        First={({ history }) => <FirstPeriod />}
        Two={({ history }) => <SecondPeriod />}
        Three={({ history }) => <ThreePeriod />}
        Result={({ history }) => <ResultReport />}
      />
      <footer className="bg-[#7C553E] h-[50px] flex justify-center items-center">
        <p className="text-[#fff] text-[12px] font-medium">
          Powered by Whateverchallenge
        </p>
      </footer>
    </article>
  );
}
