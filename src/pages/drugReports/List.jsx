import {
  Datagrid,
  TextField,
  List,
  DateField,
  ImageField,
  ChipField,
} from "react-admin";
import AuthenticatedExcise from "../../components/helper/ReportAuthenticated";

const DrugList = () => {
  return (
    <AuthenticatedExcise>
      <List>
        <Datagrid rowClick="show">
          <DateField source="dateIncident" />
          <DateField source="timeFrom" />
          <DateField source="timeTo" />
          <ChipField source="category" />
          <TextField source="description" />
          <ImageField source="image" title="Avatar" alt="Avatar" />
          <TextField source="location.title" />
        </Datagrid>
      </List>
    </AuthenticatedExcise>
  );
};

export default DrugList;
