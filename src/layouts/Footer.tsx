import Link from 'next/link';

import IconGithub from '@/components/icon/Github';
import IconLinkedin from '@/components/icon/LinkedIn';
import { githubURL, linkedInURL } from '@/config/const';

export default function Footer() {
  return (
    <footer className='flex-col-center mb-30 mt-60 gap-15 print:hidden'>
      <div className='flex justify-center gap-20'>
        <Link href={linkedInURL} rel='noopener noreferrer' target='_blank'>
          <IconLinkedin
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
        <Link href={githubURL} rel='noopener noreferrer' target='_blank'>
          <IconGithub
            className='fill-foreground transition hover:fill-pink-600'
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2024. <span className='font-semibold'>SsongQ</span> all rights reserved.
      </div>
    </footer>
  );
}
