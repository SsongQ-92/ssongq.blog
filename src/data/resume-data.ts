import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';
import { githubURL, linkedInURL, myEmail } from '@/config/const';

export const RESUME_DATA = {
  name: '송규경',
  initials: 'SsongQ',
  location: '대한민국 서울특별시 (한국 표준시)',
  locationLink: 'https://www.google.com/maps/place/seoul',
  about: '사용자 경험에 주의를 기울이는 프론트엔드 개발자',
  summary:
    '불편함을 해결하거나 편리함을 제공하는 프로덕트를 직접 빠르게 만들 수 있다는 점에서 웹 개발에 큰 매력을 느끼고 있습니다. 단순히 기능을 구현하는 것을 넘어, 일관된 인터페이스와 예측 가능한 동작을 통해 더 나은 경험을 제공하는 것이 중요하다고 느낍니다. \n협업에서는 팀원들 역시 코드의 “사용자”라고 생각하여, 재사용 가능하고 가독성 높은 코드가 작성될 수 있도록 “왜?”라는 질문을 통해 근거 있는 코드를 작성하려 노력합니다. 기본기를 바탕으로 한 완성도 있는 기술과 함께, 사용자에게 실질적인 가치를 제공하는 서비스를 개발하는 것이 개발 공부의 동기이자 목표입니다.',
  avatarUrl: '/me.jpg',
  contact: {
    email: myEmail,
    social: [
      {
        name: 'Github',
        url: githubURL,
        icon: IconGithub,
      },
      {
        name: 'LinkedIn',
        url: linkedInURL,
        icon: IconLinkedin,
      },
    ],
  },
  education: [
    {
      school: '동서대학교',
      degree: '메카트로닉스공학과',
      grade: '4.19 / 4.5',
      start: '2011',
      end: '2018',
    },
  ],
  work: [
    {
      company: '(주) 에이치시티',
      link: 'http://www.hct.co.kr/',
      title: '기술 영업 및 Project Manager',
      start: '2019. 04',
      end: '2023. 01',
      description:
        '전자기기 등의 제품에 대한 시험 및 KC, FCC, CE를 포함한 각국의 인증 서비스를 제공하는 국제공인 시험인증 기관',
      points: [
        '고객사 제품의 시험 및 인증 영업과 프로젝트 관리',
        '인증 요건 및 절차에 대한 기술 지원',
        '글로벌 마켓 관련하여 인도네시아, 대만, 싱가포르, 벨라루스 등 프로젝트 1건당 약 110개국의 문의 대응과 인증 진행',
      ],
    },
  ],
  skills: ['JavaScript', 'TypeScript', 'React.js', 'Next.js'],
} as const;
