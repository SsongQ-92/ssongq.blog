import { ExternalLink } from './Link';
import { MDXComponents } from 'mdx/types';

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
};
