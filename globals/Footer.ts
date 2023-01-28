import { GlobalConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import link, { Type as LinkType } from '../fields/link';

export type Type = {
  nav: {
    link: LinkType
  }[]
}

const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: {
    read: isAdmin,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        link,
      ],
    },
  ],
};

export default Footer;
