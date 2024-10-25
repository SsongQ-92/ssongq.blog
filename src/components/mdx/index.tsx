import Callout from './Callout';
import { Image } from './Image';
import NextImage from './Image/NextImage';
import ExternalLink from './Link/ExternalLink';
import InternalLink from './Link/InternalLink';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: InternalLink as any,
  Link: ExternalLink as any,
  img: Image as any,
  Image: NextImage as any,
  blockquote: Callout,
  Callout,
};
