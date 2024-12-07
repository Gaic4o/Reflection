"use client";

import {
  FirstPeriod,
  SecondPeriod,
  StartClass,
  ThreePeriod,
} from "@/src/features/ui";
import ResultReport from "@/src/features/ui/result-report";
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
      step: "Start",
      context: {},
    },
  });

  return (
    <memoir.Render
      Start={({ history }) => <StartClass />}
      First={({ history }) => <FirstPeriod />}
      Two={({ history }) => <SecondPeriod />}
      Three={({ history }) => <ThreePeriod />}
      Result={({ history }) => <ResultReport />}
    />
  );
}
