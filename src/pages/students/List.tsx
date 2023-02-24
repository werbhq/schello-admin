import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { Student } from "../../types/Student";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const StudentList = () => (
  <AuthenticatedExcise>
    <List exporter={false} filters={filters}>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="classId" />
        <FunctionField
          source="reported"
          render={(resource: Student) => resource["reported"].length}
        ></FunctionField>
      </Datagrid>
    </List>
  </AuthenticatedExcise>
);

export default StudentList;
