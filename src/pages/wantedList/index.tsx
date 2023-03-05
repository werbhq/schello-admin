import { ResourceProps } from "react-admin";
import { MAPPING } from "../../provider/mapping";
import icon from "@mui/icons-material/List";
import { WantedPersonList } from "./List";
import { WantedPersonShow } from "./Show";
import { WantedPersonEdit } from "./Edit";
import { WantedPersonCreate } from "./Create";

const WantedList: ResourceProps = {
  name: MAPPING.WANTED_LIST,
  icon,
  options: { label: "Wanted List" },
  list: WantedPersonList,
  show: WantedPersonShow,
  edit: WantedPersonEdit,
  create: WantedPersonCreate,
};

export default WantedList;
