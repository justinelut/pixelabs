import slug from "../fields/slug";
import Progress from "../components/client/Project";
import { isAdmin } from "../access/isAdmin";

const Projects = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    // Only admins can create
    create: isAdmin,
    // Only admins or editors with site access can read
    read: () => true,
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
    Progress,
    slug,
  ],
};

export default Projects;
