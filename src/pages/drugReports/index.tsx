import icon from "@mui/icons-material/Vaccines";
import { MAPPING } from "../../provider/mapping";
import DrugList from "./List";
import DrugShow from "./Show";
import DrugEdit from "./Edit";
import { ResourceProps } from "react-admin";

const DrugReport: ResourceProps = {
  name: MAPPING.DRUG_REPORTS,
  icon,
  options: { label: "Drug Reports" },
  list: DrugList,
  show: DrugShow,
  edit: DrugEdit,
};

export default DrugReport;
