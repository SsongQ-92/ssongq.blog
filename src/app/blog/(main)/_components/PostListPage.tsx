import PostCard from './PostCard';
import { getAllPostCount, getSortedPostList } from '@/lib/post';

interface PostListProps {
  category?: string;
}

export default async function PostListPage({ category }: PostListProps) {
  const postList = await getSortedPostList(category);
  const allPostCount = await getAllPostCount();

  console.log(postList);

  return (
    <section className='mx-auto mt-40 w-full max-w-950 px-4'>
      <section>
        <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-30'>
          {postList.map((post) => (
            <PostCard key={post.url + post.date} post={post} />
          ))}
        </ul>
      </section>
    </section>
  );
}
