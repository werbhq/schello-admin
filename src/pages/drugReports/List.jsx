import {
  Datagrid,
  TextField,
  List,
  DateField,
  ImageField,
  ChipField,
} from "react-admin";

const DrugList = () => {
  return (
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
  );
};

export default DrugList;
