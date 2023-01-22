import slug from "../fields/slug";
import colorField from "../components/client/colorfield";
import { isAdmin } from "../access/isAdmin";

const VideoEditing = {
  slug: "videoservices",
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
      name: "packageimage", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "associatedServices",
      label: "Associated Services",
      type: "relationship",
      relationTo: "services", // required
      hasMany: true,
      required: true,
    },
    slug,
  ],
};

export default VideoEditing;
