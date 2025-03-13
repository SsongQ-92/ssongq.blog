import { Metadata } from 'next';

import { RESUME_DATA } from '@/data/resume-data';
import { Construction } from 'lucide-react';

export function generateMetadata(): Metadata {
  return {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  };
}

export default function AboutPage() {
  return (
    <section className='flex-center mx-auto gap-10 text-30'>
      <Construction className='size-30' />
      <span>공사 중</span>
    </section>
  );
}
