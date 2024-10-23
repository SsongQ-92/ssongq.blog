import Link from 'next/link';

import { notFoundGifURL } from '@/config/const';

export default function NotFoundPage() {
  return (
    <section className='flex-col-center mx-auto gap-60'>
      <Link href='/blog'>
        <p className='animate-bounce text-30 text-foreground'>홈으로 돌아가기 클릭 👆</p>
      </Link>
      <div className='flex-col-center gap-10'>
        <h1 className='text-30 text-foreground'>Oops!</h1>
        <h2 className='text-26 text-foreground'>Something went wrong</h2>
        <h3 className='mb-10 text-22 text-accent-foreground'>없는 페이지 입니다</h3>
        <img src={notFoundGifURL} alt='notFoundPage image' width='256' height='230' />
      </div>
    </section>
  );
}
