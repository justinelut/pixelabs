import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';

export type SizeDetails = {
  filename: string
  width: number
  height: number
}

export type Size = 'card' | 'square' | 'portrait' | 'feature';

export type Type = {
  filename: string
  alt: string
  mimeType: string
  sizes: {
    card?: SizeDetails
    square?: SizeDetails
    portrait?: SizeDetails
    feature?: SizeDetails
  }
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: isAdmin,
    // Only admins can update
    update: isAdmin,
    // Only admins can delete
    delete: isAdmin,
  },
  admin: {
    useAsTitle: 'filename',
  },
  upload: {
    adminThumbnail: 'card',
    
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'square',
        width: 1200,
        height: 1200,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
    
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
  
};

export default Media;
