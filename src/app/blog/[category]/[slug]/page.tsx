import { Metadata } from 'next';

import { baseURL } from '@/config/const';
import { asyncGetPostDetail, getPostPaths, parsePostAbstract } from '@/lib/post';

interface Props {
  params: { category: string; slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map((path) => parsePostAbstract(path))
    .map((data) => ({ category: data.categoryPath, slug: data.slug }));
  return paramList;
}

export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
  const post = await asyncGetPostDetail(category, slug);

  const title = `${post.title} | SSONGQ`;
  const imageURL = `${baseURL}${post.thumbnail}`;

  return {
    title,
    description: post.desc,

    openGraph: {
      title,
      description: post.desc,
      type: 'article',
      publishedTime: post.date.toISOString(),
      url: `${baseURL}${post.url}`,
      images: [imageURL],
    },
    twitter: {
      title,
      description: post.desc,
      images: [imageURL],
    },
  };
}

export default function PostDetailPage({ params: { category, slug } }: Props) {
  return <div></div>;
}
