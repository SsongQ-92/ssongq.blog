import Link from 'next/link';

import IconEmail from '@/components/icon/Email';
import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';
import { githubURL, linkedInURL, myEmail } from '@/config/const';

export default function Footer() {
  return (
    <footer className='flex-col-center mb-25 mt-55 gap-12 print:hidden'>
      <div className='flex justify-center gap-18 sm:gap-20'>
        <Link href={linkedInURL} rel='noopener noreferrer' target='_blank'>
          <IconLinkedin className='size-22 fill-foreground transition hover:fill-pink-600 sm:size-30' />
        </Link>
        <Link href={githubURL} rel='noopener noreferrer' target='_blank'>
          <IconGithub className='size-22 fill-foreground transition hover:fill-pink-600 sm:size-30' />
        </Link>
        <Link href={`mailto:${myEmail}`}>
          <IconEmail className='size-22 fill-foreground transition hover:fill-pink-600 sm:size-30' />
        </Link>
      </div>
      <div className='text-12 sm:text-14'>
        © 2024 | <span className='font-semibold'>SsongQ's Blog</span> all rights reserved.
      </div>
    </footer>
  );
}
