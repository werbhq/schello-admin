import { ClassroomProvider } from "./custom/classroom";
import { StudentsProvider } from "./custom/students";
import { SubjectsProvider } from "./custom/subjects";
import { SemestersProvider } from "./custom/semesters";
import { AuthTeachersProvider } from "./custom/authorizedTeachers";
import { DrugReportsProvider } from "./custom/reports_schello";
import { ReportsProvider } from "./custom/reports";

// ADD YOUR PROVIDERS HERE
const CustomProviders = [
  ClassroomProvider,
  SemestersProvider,
  StudentsProvider,
  SubjectsProvider,
  AuthTeachersProvider,
  ReportsProvider,
  DrugReportsProvider,
];

export default CustomProviders;
