import slug from "../fields/slug";
import colorField from '../components/client/colorfield'
import { isAdmin } from "../access/isAdmin";

const Category = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
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
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    colorField,
    slug,
  ],
};

export default Category;
