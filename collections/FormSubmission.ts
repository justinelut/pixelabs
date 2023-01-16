import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { isAdmin } from '../access/isAdmin';

const FormSubmission: CollectionConfig = {
  slug: 'form-submissions',
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
  hooks: {
    afterChange: [
      () => {
        // Send an email to the client
        // with the content of the message
      },
    ],
  },
  fields: [
    {
      type: 'text',
      name: 'email',
      label: 'From Email',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Message',
      admin: {
        readOnly: true,
      },
    },
    {
      type: 'text',
      name: 'source',
      label: 'Source',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
  ],
};

export default FormSubmission;
