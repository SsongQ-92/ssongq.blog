import CategoryList from './CategoryList';
import PostCard from './PostCard';
import {
  asyncGetAllPostCount,
  asyncGetCategoryDetailList,
  asyncGetSortedPostList,
} from '@/lib/post';

interface PostListProps {
  category?: string;
}

export default async function PostListPage({ category }: PostListProps) {
  const postList = await asyncGetSortedPostList(category);
  const allPostCount = await asyncGetAllPostCount();
  const categoryList = await asyncGetCategoryDetailList();

  return (
    <section className='mx-auto mt-35 w-full max-w-1000 px-4'>
      <CategoryList
        allPostCount={allPostCount}
        categoryList={categoryList}
        currentCategory={category}
      />
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