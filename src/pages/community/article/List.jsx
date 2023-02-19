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
    <BooleanInput source="visible" resettable />,
  ];

  return (
    <List>
      <Datagrid rowClick="show" filters={filters}>
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
