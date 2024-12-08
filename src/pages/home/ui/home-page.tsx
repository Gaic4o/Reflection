"use client";

import { FirstPeriod } from "@/src/features/first-period";
import { ResultReport } from "@/src/features/result-report";
import { SecondPeriod } from "@/src/features/second-period";
import { StartClass } from "@/src/features/start";
import { ThreePeriod } from "@/src/features/three-period";
import { useFunnel } from "@use-funnel/browser";

type FunnelState = {
  teacherNm?: string;
  userNm?: string;
  team?: string;
  experience?: string;
  retroType?: string;
  retroAnswer1?: string;
  retroAnswer2?: string;
  retroAnswer3?: string;
};

export default function HomePage() {
  const memoir = useFunnel<{
    Start: FunnelState;
    First: FunnelState & { teacherNm: string };
    Two: FunnelState & {
      teacherNm: string;
      userNm: string;
      team: string;
      experience: string;
    };
    Three: FunnelState & {
      teacherNm: string;
      userNm: string;
      team: string;
      experience: string;
    };
    Result: FunnelState & {
      teacherNm: string;
      userNm: string;
      team: string;
      experience: string;
      retroType: string;
      retroAnswer1: string;
      retroAnswer2: string;
      retroAnswer3: string;
    };
  }>({
    id: "memoir-funnel",
    initial: {
      step: "Start",
      context: {},
    },
  });

  return (
    <article className="flex m-auto flex-col justify-center bg-[#263D2F] w-[600px]">
      <memoir.Render
        Start={({ history }) => (
          <StartClass
            onNext={(teacherNm) => history.push("First", { teacherNm })}
          />
        )}
        First={({ context, history }) => (
          <FirstPeriod
            onNext={(data) =>
              history.push("Two", {
                ...context,
                userNm: data.userNm,
                team: data.team,
                experience: data.experience,
              })
            }
          />
        )}
        Two={({ context, history }) => (
          <SecondPeriod onNext={() => history.push("Three", context)} />
        )}
        Three={({ context, history }) => (
          <ThreePeriod
            context={context}
            onNext={(data) =>
              history.push("Result", {
                ...context,
                retroType: data.retroType,
                retroAnswer1: data.retroAnswer1,
                retroAnswer2: data.retroAnswer2,
                retroAnswer3: data.retroAnswer3,
              })
            }
          />
        )}
        Result={({ context }) => <ResultReport context={context} />}
      />
      <footer className="bg-[#7C553E] h-[50px] flex justify-center items-center">
        <p className="text-[#fff] text-[12px] font-medium">
          Powered by Whateverchallenge
        </p>
      </footer>
    </article>
  );
}
