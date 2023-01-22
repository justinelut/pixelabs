import slug from "../fields/slug";
import { isAdmin } from "../access/isAdmin";

const Services = {
  slug: "services",
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
    slug,
  ],
};

export default Services;
