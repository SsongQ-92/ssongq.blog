import Link from 'next/link';

import { Post } from '@/config/types';
import { CalendarDays, Clock3 } from 'lucide-react';

interface Props {
  post: Post;
}

export default function PostHeader({ post }: Props) {
  return (
    <header className='mt-50 text-center'>
      <h1 className='mb-18 text-30'>{post.title}</h1>
      <div className='mb-12 text-18'>
        <Link
          href={`/blog/${post.categoryPath}`}
          className='font-semibold text-violet-500 no-underline underline-offset-4 hover:underline'
        >
          {post.categoryPublicName}
        </Link>
      </div>
      <div className='flex-center gap-16 text-13 text-gray-500 dark:text-gray-400'>
        <div className='flex items-center gap-5'>
          <CalendarDays className='w-18' />
          <span className='mt-2'>{post.dateString}</span>
        </div>
        <div className='flex items-center gap-5'>
          <Clock3 className='w-18' />
          <span className='mt-2'>{post.readingMinutes}분</span>
        </div>
      </div>
      <hr className='mt-20' />
    </header>
  );
}
