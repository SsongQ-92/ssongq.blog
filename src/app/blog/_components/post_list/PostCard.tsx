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
      <li className='group flex h-full flex-col rounded-md border-2 shadow-md transition hover:shadow-xl dark:border-slate-700 dark:hover:border-white'>
        <div className='relative aspect-video max-h-220 w-full overflow-hidden rounded-t-md border-2'>
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes='(max-width: 1000px) 50vw, 450px'
            fill
            priority
            className='object-cover transition-transform group-hover:scale-110'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between px-16 pb-10 pt-8 group-hover:bg-slate-50 sm:px-20 sm:pb-12'>
          <div>
            <div className='text-16 font-medium text-sky-600 sm:text-18 lg:text-20'>
              {post.categoryPublicName}
            </div>
            <h2 className='mt-4 text-18 font-bold sm:mb-12 sm:text-20 md:text-22'>{post.title}</h2>
            <h4 className='mb-12 mt-[-6px] text-gray-500 text-12'>{post.desc}</h4>
          </div>
          <div className='flex justify-between text-12 text-gray-500 dark:text-gray-400 sm:text-14'>
            <div className='flex items-center gap-4'>
              <CalendarDays className='w-17 sm:w-22' />
              <span className='mt-2'>{post.dateString}</span>
            </div>
            <div className='flex items-center gap-4'>
              <Clock3 className='w-17 sm:w-22' />
              <span className='mt-2'>{post.readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
}
