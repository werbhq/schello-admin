import { useEffect, useState } from "react";
import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  TextInput,
  DateField,
  ImageField,
  ChipField,
  useAuthProvider,
} from "react-admin";

const filters = [
  <SearchInput source="id" alwaysOn resettable />,
  <TextInput source="totalSemesters" label="Total Semesters" resettable />,
];

const DrugList = () => {
  const authProvider = useAuthProvider();
  authProvider.getPermissions().then((e) => console.log(e));

  return (
    <List exporter={false} filters={filters}>
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
