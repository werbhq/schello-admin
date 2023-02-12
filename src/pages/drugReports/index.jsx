import icon from "@mui/icons-material/Article";
import DrugList from "./List";

import { MAPPING } from "../../provider/mapping";

const DrugReport = {
  name: MAPPING.DRUG_REPORTS,
  icon,
  options: { label: "Drug Reports" },
  list: DrugList,
};

export default DrugReport;
