import { Field } from "payload/types";
import ProjectProgress from "./project";

export const validateHexColor = () => {
  return (
    value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/).length === 1 ||
    `${value} is not a valid hex color`
  );
};

const colorField = {
  name: "color",
  type: "text",
  validate: validateHexColor,
  required: true,
  admin: {
    components: {
      Field: ProjectProgress,
    },
  },
};

export default colorField;
