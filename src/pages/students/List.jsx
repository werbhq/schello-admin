import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";

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
          render={(resource, source) => resource[source].length}
        ></FunctionField>
      </Datagrid>
    </List>
  </AuthenticatedExcise>
);

export default StudentList;
