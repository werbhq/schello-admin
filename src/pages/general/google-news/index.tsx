import icon from "@mui/icons-material/Google";
import MAPPING from "provider/mapping";
import Show from "../news/Show";
import List from "../news/List";
import Edit from "./Edit";
import { ResourceProps } from "react-admin";

const GoogleNews: ResourceProps = {
  name: MAPPING.GENERAL.GOOGLE_NEWS,
  icon,
  options: { label: "Google News" },
  list: List,
  show: Show,
  edit: Edit,
};

export default GoogleNews;
