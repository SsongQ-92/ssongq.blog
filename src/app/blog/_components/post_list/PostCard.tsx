import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/config/types';
import { CalendarDays, Clock3 } from 'lucide-react';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={post.url}>
      <li className='flex h-full flex-col gap-3 rounded-md border-2 shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white'>
        <div className='relative aspect-video w-full overflow-hidden rounded-t-md border-2'>
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes='(max-width: 1000px) 50vw, 450px'
            fill
            priority
            className='object-cover transition-transform hover:scale-110'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between p-20 pt-8'>
          <div>
            <div className='text-18 font-medium text-violet-500 lg:text-20'>
              {post.categoryPublicName}
            </div>
            <h2 className='mb-12 mt-4 text-20 font-bold md:text-22'>{post.title}</h2>
          </div>
          <div className='flex justify-between gap-5 text-15 text-gray-500 dark:text-gray-400'>
            <div className='flex items-center gap-4'>
              <CalendarDays className='w-22' />
              <span className='mt-2'>{post.dateString}</span>
            </div>
            <div className='flex items-center gap-4'>
              <Clock3 className='w-22' />
              <span className='mt-2'>{post.readingMinutes}분</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
