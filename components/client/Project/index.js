import { Field } from "payload/types";
import progress from './progress'
import { isAdmin } from "../../../access/isAdmin";
  
const Progress = {
  name: "progress",
  type: "text",
  required: true,
  admin: {
    components: {
      Field: progress,
    },
  },
};

export default Progress;
