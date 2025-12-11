import type { BaseLayoutProps } from 'fumadocs-ui/layout';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'AudioCheckr',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yourusername/audiocheckr',
    },
  ],
};
