import {
  BooleanField,
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const ArticleShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="author" />
        <TextField source="email" />
        <DateField source="timestamp" locales={"en-GB"} />
        <BooleanField source="visible" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ArticleShow;
