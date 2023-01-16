import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrSelf } from '../access/isAdminOrSelf';

export type Type = {
  title: string
  slug: string
}

const Payments: CollectionConfig = {
  slug: 'payments',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: isAdminOrSelf,
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slug,
  ],
};

export default Payments;
