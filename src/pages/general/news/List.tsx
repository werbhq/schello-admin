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
import { news_type } from "./constant";

export const ArticleList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" />,
  ];

  return (
    <List filters={filters}>
      <Datagrid rowClick="show">
        <TextField source="title" />
        <SelectField choices={news_type} source="news_type" />
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
