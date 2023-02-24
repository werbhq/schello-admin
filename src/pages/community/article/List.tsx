import {
  BooleanField,
  DateField,
  EmailField,
  TextField,
  List,
  Datagrid,
  SearchInput,
  BooleanInput,
} from "react-admin";

export const ArticleList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" />,
  ];

  return (
    <List filters={filters}>
      <Datagrid rowClick="show">
        <TextField source="title" />
        <TextField source="author" />
        <EmailField source="email" />
        <DateField
          source="timestamp"
          label="Date"
          showDate={true}
          locales={"en-GB"}
        />
        <BooleanField source="visible" />
      </Datagrid>
    </List>
  );
};

export default ArticleList;
