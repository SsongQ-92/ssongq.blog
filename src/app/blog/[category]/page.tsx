import { Metadata } from 'next';

import PostListPage from '../_components/post_list/PostListPage';
import { baseURL, blogName, blogThumbnailURL } from '@/config/const';
import { getCategoryList, getCategoryPublicName } from '@/lib/post';

interface Props {
  params: { category: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

export function generateMetadata({ params: { category } }: Props): Metadata {
  const cgDisplayName = getCategoryPublicName(category);
  const title = `${cgDisplayName} | ${blogName}`;
  const url = `${baseURL}/${category}`;

  return {
    title,
    openGraph: {
      title,
      url,
      images: [blogThumbnailURL],
    },
    twitter: {
      title,
      images: [blogThumbnailURL],
    },
  };
}

export default function CategoryPage({ params: { category } }: Props) {
  return <PostListPage category={category} />;
}
