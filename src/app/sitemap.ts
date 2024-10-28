import { MetadataRoute } from 'next';

import { baseURL } from '@/config/const';
import { asyncGetPostListSitemap } from '@/lib/post';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const postList = await asyncGetPostListSitemap();
  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    ...postList,
  ];
};

export default sitemap;
