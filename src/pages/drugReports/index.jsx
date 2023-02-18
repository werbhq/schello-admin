import icon from "@mui/icons-material/Vaccines";
import DrugList from "./List";

import { MAPPING } from "../../provider/mapping";
import DrugShow from "./Show";

const DrugReport = {
  name: MAPPING.DRUG_REPORTS,
  icon,
  options: { label: "Drug Reports" },
  list: DrugList,
  show: DrugShow,
};

export default DrugReport;
