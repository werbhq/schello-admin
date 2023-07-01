import useTenant from "hooks/useTenant";
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
  const tenant = useTenant();

  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" />,
  ];

  return (
    <List filters={filters} filterDefaultValues={{ tenant }}>
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
