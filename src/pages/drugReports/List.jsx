import {
  Datagrid,
  TextField,
  List,
  DateField,
  ImageField,
  ChipField,
  useAuthProvider,
} from "react-admin";

const DrugList = () => {
  const authProvider = useAuthProvider();
  authProvider.getPermissions().then((e) => console.log(e));

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
