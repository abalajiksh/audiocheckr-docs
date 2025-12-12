import { docs, meta } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx/runtime/next';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
});
