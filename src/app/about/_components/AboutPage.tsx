import { Metadata } from 'next';

import IconGlobe from '@/components/icon/Globe';
import Section from '@/components/ui/Section';
import { RESUME_DATA } from '@/data/resume-data';

export function generateMetadata(): Metadata {
  return {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  };
}

export default function AboutPage() {
  return (
    <main className='container relative scroll-my-40 mx-auto overflow-auto p-20 sm:p-35 md:p-60 print:p-45 print:pt-0'>
      <Section className='mx-auto w-full max-w-2xl space-y-30 print-space-y-15'>
        <div className='flex flex-col-reverse items-center justify-between gap-15 sm:flex-row'>
          <div className='flex-1 space-y-6 text-center sm:text-start'>
            <h1 className='mb-12 text-32 font-bold'>{RESUME_DATA.name}</h1>
            <p className='max-w-md text-pretty text-muted-foreground print:text-12'>
              {RESUME_DATA.about}
            </p>
            <p className='max-w-md items-center text-pretty text-14 text-muted-foreground'>
              <a
                className='inline-flex items-center gap-x-5 align-baseline leading-none hover:underline'
                href={RESUME_DATA.locationLink}
                target='_blank'
                rel='noreferrer'
              >
                <IconGlobe className='size-14 fill-muted-foreground' />
                {RESUME_DATA.location}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
