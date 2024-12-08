import { HomeFunnelContext } from '@/src/pages/home/ui/home-page';
import { Box, Container, Flex } from '@radix-ui/themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ResultReportItem } from '../model/types';

type Props = {
  mainContext: HomeFunnelContext;
};
const ResultReport = ({ mainContext }: Props) => {
  const [retroRespect, setRetroRespect] = useState<ResultReportItem | null>(null);

  const loadRetroRespect = async () => {
    // FIXME: API 연동 후 주석 해제
    // const res = await getRetroRespect(mainContext.context.retroType);
    // setRetroRespect(res);
  };

  useEffect(() => {
    loadRetroRespect();
  }, []);

  if (!retroRespect) {
    return <></>;
  }

  return (
    <Container className='px-[32px] mt-[95px]'>
      <h1 className='text-center text-[#fff] mb-[40px] text-[36px] font-semibold'>24년 회고 일기장을 확인해보세요!</h1>
      {/* 30초 -> 1분 */}
      <article className='py-[16px] rounded-[8px] px-[26px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
        <h2 className='text-[#fff] text-[24px] font-semibold'>24년 감정 날씨</h2>
        <Flex className='flex flex-row items-center'>
          <Flex className='flex flex-row items-center mr-[36px]'>
            <Image src='/home/svg/feedback-sun.svg' alt='' width={35} height={36} />
            <p className='text-[#fff] text-[16px] font-semibold'>맑음</p>
          </Flex>
          <p className='text-[18px] mt-[37px] font-semibold text-[#fff]'>
            즐거운일을 잔뜩 경험하고, 새로운 도전을 통해서 스스로를 더 잘 이해한 당신의 감정 날씨는 맑음이에요.
          </p>
        </Flex>
      </article>

      <article className='mt-[40px] mb-[40px] py-[22px] px-[26px] rounded-[8px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
        <h2 className='mb-[12px] text-[24px] font-semibold text-[#fff]'>24년 회고 일기</h2>
        <p className='text-[18px] leading-[2] text-[#fff]'>
          새로운 직장으로 이직해서 차근차근 적응해나가고있다. 술 담배 끊기는 실패했지만...내년에는 꼭 잘해낼 수 있기를
          스쿼드 팀원들과 더 깊게 이해하고 함께 일하게되어 즐거운 나날이지만 성과를 만들어내기 위한 시도들이 실패를
          거듭하며 침울해지기도했다. 어려움을 극복하기 위해서 서로 의지하며 시도한 결과 24년 말에는 목표했던 지표를 달성
          할 수 있어 뿌듯하다 내년에는 새로운 도전을 두려워하지 않고 시도해보려고 한다. 더 나은 사람이 될 수 있기를!
        </p>
      </article>

      <article className='py-[31px] px-[26px] rounded-[8px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
        <Flex className='flex flex-row items-center mb-[27px]'>
          <Image src='/home/img/start-3.webp' className='rounded-full mr-[35px]' alt='' width={96} height={96} />
          <p className='text-[24px] text-[#fff] font-semibold'>김덕배 선생님 피드백</p>
        </Flex>

        <Box className='rounded-[8px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
          <Flex className='flex flex-row mb-[13px]'>
            <Image src='/home/svg/feedback-1.svg' alt='' width={16} height={16} aria-hidden />
            <p className='text-[24px] ml-[9px] text-[#fff] font-semibold'>잘한 점</p>
          </Flex>
          <p className='text-[18px] font-semibold text-[#fff]'>
            목표를 향해서 꾸준히 노력한 점이 돋보이는구나! 어려울 수 있는 일을 차근차근 해낸 모습이 장하다.
          </p>
        </Box>

        <Box className='rounded-[8px] mt-[13px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
          <Flex className='flex flex-row mb-[13px]'>
            <Image src='/home/svg/feedback-2.svg' alt='' width={16} height={16} aria-hidden />
            <p className='text-[24px] ml-[9px] text-[#fff] font-semibold'>개선하면 좋을 점</p>
          </Flex>
          <p className='text-[18px] font-semibold text-[#fff]'>
            스트레스가 과한 상황에서 스스로를 더 몰아붙이는 경향이 아쉽단다. 확실한 휴식도 지속가능한 성장을 만드는
            중요한 요소니 잘쉬는 연습을 해보자
          </p>
        </Box>

        <Box className='rounded-[8px] mt-[13px] px-[18px] py-[21px] bg-black/[0.001] box-border border-2 border-white/80 shadow-[0px_0px_10px_0px_rgba(255,255,255,0.3)]'>
          <Flex className='flex flex-row mb-[13px]'>
            <Image src='/home/svg/feedback-3.svg' alt='' width={16} height={16} aria-hidden />
            <p className='text-[24px] ml-[9px] text-[#fff] font-semibold'>25년 응원 메시지</p>
          </Flex>
          <p className='text-[18px] font-semibold text-[#fff]'>
            사실 24년도 너무나 잘해냈기에 내년에도 잘해낼 것을 믿어 의심치 않는다. 내년에 원하는 일을 잘 해낼 수 있도록
            진심으로 빈다. 힘내거라
          </p>
        </Box>
      </article>

      <Container className='flex justify-center items-center'>
        <p className='mt-[86px] mb-[83px] text-center text-[#fff] text-[36px]'>
          함께 성장할 수 있도록
          <br />
          나눠볼까요?
        </p>
        <button className='m-auto rounded-[4px] flex flex-row justify-center items-center text-[24px] font-semibold bg-[#fff] h-[40px] w-[129px]'>
          <Image src='/home/svg/feedback-link.svg' alt='' width={14} height={14} className='mr-[9.4px]' />
          공유하기
        </button>
      </Container>
      <div className='flex items-end flex-col mt-[67px] mr-[24px]'>
        <button className='h-[50px] w-[218px] text-[#fff] text-[30px] bg-[#5A3625] font-medium rounded-t-[40px]'>
          Submit
        </button>
        <div className='h-[11px] w-[218px] bg-[#0F1048] rounded-b-[3px]'></div>
      </div>
    </Container>
  );
};

export default ResultReport;
