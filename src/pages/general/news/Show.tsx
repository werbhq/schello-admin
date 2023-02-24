import {
  BooleanField,
  DateField,
  RichTextField,
  SelectField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";
import { news_type } from "./constant";

export const ArticleShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <SelectField choices={news_type} source="news_type" />
        <DateField
          source="timestamp"
          label="Date"
          showDate={true}
          locales={"en-GB"}
        />
        <UrlField source="redirect_url" emptyText="-" />
        <RichTextField source="description" />
        <BooleanField source="visible" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ArticleShow;
