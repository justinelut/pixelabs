import slug from "../fields/slug";
import colorField from '../components/client/colorfield'
import { isAdmin } from "../access/isAdmin";

const WebDevelopment = {
  slug: "webservices",
  admin: {
    useAsTitle: "name",
  },
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
  fields: [
    {
        name: "name",
        label: "Service Name",
        type: "text",
        required: true,
      },
      {
        name: "price",
        label: "Service Price",
        type: "number",
        required: true,
      },
      {
        name: "associatedServices",
        label: "Associated Services",
        type: "relationship",
        relationTo: 'services', // required
        hasMany: true,
        required: true,
      },
    slug,
  ],
};

export default WebDevelopment;
