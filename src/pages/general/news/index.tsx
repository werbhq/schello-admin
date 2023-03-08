import icon from "@mui/icons-material/Newspaper";
import MAPPING from "provider/mapping";
import Create from "./Create";
import Show from "./Show";
import List from "./List";
import Edit from "./Edit";
import { ResourceProps } from "react-admin";

const GeneralNews: ResourceProps = {
  name: MAPPING.GENERAL.NEWS,
  icon,
  options: { label: "News" },
  list: List,
  show: Show,
  edit: Edit,
  create: Create,
};

export default GeneralNews;
