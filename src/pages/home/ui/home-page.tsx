'use client';

import { FirstPeriod } from '@/src/features/first-period';
import { ResultReport } from '@/src/features/result-report';
import { SecondPeriod } from '@/src/features/second-period';
import { StartClass } from '@/src/features/start';
import { ThreePeriod } from '@/src/features/three-period';
import { ThreePeriodFormProps } from '@/src/features/three-period/model';
import { createFunnelSteps, useFunnel } from '@use-funnel/browser';

export interface HomeFunnelContext {
  teacherNm: string;
  userNm: string;
  team: string;
  experience: string;
  retroType: ThreePeriodFormProps['type'];
  retroAnswer1: string;
  retroAnswer2: string;
  retroAnswer3: string;
}

const steps = createFunnelSteps<Partial<HomeFunnelContext>>()
  .extends('Start')
  .extends('First', { requiredKeys: ['teacherNm'] })
  .extends('Two', { requiredKeys: ['userNm', 'team', 'experience'] })
  .extends('Three')
  .extends('Result', { requiredKeys: ['retroType', 'retroAnswer1', 'retroAnswer2', 'retroAnswer3'] })
  .build();

export default function HomePage() {
  const memoir = useFunnel({
    id: 'memoir-funnel',
    steps,
    initial: {
      step: 'Start',
      context: {},
    },
  });

  return (
    <article className='flex m-auto flex-col justify-center  bg-[#263D2F] w-[600px]'>
      <memoir.Render
        Start={({ history }) => <StartClass onNext={(teacher) => history.push('First', { teacherNm: teacher })} />}
        First={({ history }) => <FirstPeriod onNext={(inputs) => history.push('Two', { ...inputs })} />}
        Two={({ history }) => <SecondPeriod onNext={() => history.push('Three')} />}
        Three={({ history, context }) => (
          <ThreePeriod homeContext={context} onComplete={(props) => history.push('Result', { ...props })} />
        )}
        Result={({ context }) => <ResultReport mainContext={context} />}
      />
      <footer className='bg-[#7C553E] h-[50px] flex justify-center items-center'>
        <p className='text-[#fff] text-[12px] font-medium'>Powered by Whateverchallenge</p>
      </footer>
    </article>
  );
}
