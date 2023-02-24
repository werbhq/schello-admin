import icon from "@mui/icons-material/School";
import { MAPPING } from "../../provider/mapping";
import StudentList from "./List";
import StudentShow from "./Show";
import { ResourceProps } from "react-admin";

const Students: ResourceProps = {
  name: MAPPING.STUDENTS,
  icon,
  options: { label: "Student" },
  list: StudentList,
  show: StudentShow,
};

export default Students;
