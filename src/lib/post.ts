import { CategoryDetail, Post, PostMetaData } from '@/config/types';
import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = 'src/posts';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

type PostMetaDataWithoutDateString = Omit<PostMetaData, 'dateString'>;

// MDX 파일 파싱 : abstract / detail 구분
const asyncParsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await asyncParsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// MDX의 개요 파싱
// url, cg path, cg name, slug
export const parsePostAbstract = (postPath: string) => {
  // category1/title1/content
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, '')
    .replace('.mdx', '');

  // category1, title1
  const [categoryPath, slug] = filePath.split('/');

  // /blog/category1/title1
  const url = `/blog/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);
  return { url, categoryPath, categoryPublicName, slug };
};

// MDX detail
const asyncParsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMetaDataWithoutDateString;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content, readingMinutes };
};

// category folder name을 public name으로 변경 : dir_name -> Dir Name
export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  const filteredPostPaths =
    path.sep === '\\' ? postPaths.map((postPath) => postPath.replaceAll('\\', '/')) : postPaths;
  return filteredPostPaths;
};

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const asyncGetPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(postPaths.map((postPath) => asyncParsePost(postPath)));
  return postList;
};

export const asyncGetAllPostCount = async () => (await asyncGetPostList()).length;

// post를 날짜 최신순으로 정렬
const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const asyncGetSortedPostList = async (category?: string) => {
  const postList = await asyncGetPostList(category);
  return sortPostList(postList);
};

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const filteredCgPaths =
    path.sep === '\\' ? cgPaths.map((cgPath) => cgPath.replaceAll('\\', '/')) : cgPaths;
  const cgList = filteredCgPaths.map((path) => path.split('/').slice(-1)?.[0]);
  return cgList;
};

export const asyncGetCategoryDetailList = async () => {
  const postList = await asyncGetPostList();
  const result: { [key: string]: number } = {};

  for (const post of postList) {
    const category = post.categoryPath;
    if (result[category]) {
      result[category] += 1;
    } else {
      result[category] = 1;
    }
  }

  const detailList: CategoryDetail[] = Object.entries(result).map(([category, count]) => ({
    dirName: category,
    publicName: getCategoryPublicName(category),
    count,
  }));

  return detailList;
};

export const asyncGetPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}/content.mdx`;
  const filteredFilePath = path.sep === '\\' ? filePath.replaceAll('\\', '/') : filePath;
  const detail = await asyncParsePost(filteredFilePath);
  return detail;
};
