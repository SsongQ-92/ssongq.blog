import { MdxComponents } from '@/components/mdx';
import { Post } from '@/config/types';
// @ts-expect-error no types
import remarkA11yEmoji from '@fec/remark-a11y-emoji';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface Props {
  post: Post;
}

export default function PostBody({ post }: Props) {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // 깃허브 Flavored 마크다운 지원 추가
            remarkGfm,
            // 이모티콘 접근성 향상
            remarkA11yEmoji,
            // mdx 1줄 개행 지원
            remarkBreaks,
          ],
          rehypePlugins: [
            // pretty code block
            [
              // @ts-ignore
              rehypePrettyCode,
              {
                theme: 'github-light',
              },
            ],
          ],
        },
      }}
      components={MdxComponents}
    />
  );
}
