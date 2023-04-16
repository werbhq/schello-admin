import {
  BooleanField,
  DateField,
  TextField,
  List,
  Datagrid,
  SearchInput,
  BooleanInput,
  UrlField,
  SelectField,
} from "react-admin";
import { newsList } from "./constant";

export const ArticleList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" />,
  ];

  return (
    <List filters={filters} sort={{ field: "timestamp", order: "DESC" }}>
      <Datagrid rowClick="show">
        <TextField source="title" />
        <SelectField choices={newsList} source="news_type" />
        <DateField
          source="timestamp"
          label="Date"
          showDate={true}
          locales={"en-GB"}
        />
        <UrlField source="redirect_url" emptyText="-" />
        <BooleanField source="visible" />
      </Datagrid>
    </List>
  );
};

export default ArticleList;
