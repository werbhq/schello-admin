import icon from "@mui/icons-material/School";

import { MAPPING } from "../../provider/mapping";
// import AuthorizedTeacherList from "./List";
// import AuthorizedTeacherShow from "./Show";
// import AuthorizedTeacherEdit from "./Edit";
// import AuthorizedTeacherCreate from "./Create";
import { ListGuesser, ShowGuesser } from "ra-ui-materialui";

const Students = {
  name: MAPPING.STUDENTS,
  icon,
  options: { label: "Student" },
  list: ListGuesser,
  show: ShowGuesser,
};

export default Students;
