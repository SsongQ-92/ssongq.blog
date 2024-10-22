import PostCard from './PostCard';

export default async function PostListPage() {
  const todayDate = new Date();

  const mockPostData = {
    title: '블로그 만들기',
    date: todayDate,
    dateString: todayDate.toDateString(),
    thumbnail: '/blog_thumbnail.png',
    desc: '드디어 블로그를 만든다',
    url: '',
    slug: '',
    categoryPath: '',
    content: '',
    categoryPublicName: 'all',
  };

  return (
    <div className='w-[35%]'>
      Post List 페이지 입니다
      <PostCard post={mockPostData} />
    </div>
  );
}
