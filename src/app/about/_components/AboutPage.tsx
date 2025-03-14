import { Metadata } from 'next';
import Image from 'next/image';

import IconGlobe from '@/components/icon/Globe';
import Button from '@/components/ui/Button';
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
            <div className='flex justify-center gap-x-8 pt-3 text-14 text-muted-foreground sm:justify-start print:hidden'>
              {RESUME_DATA.contact.social.map((social) => (
                <Button key={social.name} className='size-30' intent='outline' size-='icon'>
                  <a href={social.url} target='_blank' rel='noreferrer'>
                    <social.icon className='size-16 fill-muted-foreground' />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className='flex-shrink-0 w-150 h-150 rounded-sm overflow-hidden shadow-md'>
            <Image
              src={RESUME_DATA.avatarUrl}
              alt={RESUME_DATA.name}
              width={150}
              height={150}
              quality={100}
              priority
            />
          </div>
        </div>
        <Section>
          <h2 className='text-28 font-bold'>About</h2>
          <p className='text-pretty leading-8 text-muted-foreground print:text-[12px] sm:whitespace-pre-wrap whitespace-normal'>
            {RESUME_DATA.summary}
          </p>
        </Section>
      </Section>
    </main>
  );
}
