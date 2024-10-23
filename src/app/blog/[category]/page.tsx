import PostListPage from '../(main)/_components/PostListPage';

type Props = {
  params: { category: string };
};

export const dynamicParams = false;

export default async function CategoryPage({ params }: Props) {
  return <PostListPage category={params.category} />;
}
