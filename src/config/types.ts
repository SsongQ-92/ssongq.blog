export interface PostMetaData {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
}

export interface Post extends PostMetaData {
  url: string;
  slug: string;
  categoryPath: string;
  categoryPublicName: string;
  content: string;
  readingMinutes: number;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}
