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
    <main className='container relative scroll-my-12 mx-auto overflow-auto p-6 sm:p-9 md:p-16 print:p-12 print:pt-0'></main>
  );
}
