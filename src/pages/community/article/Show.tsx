import {
  BooleanField,
  DateField,
  RichTextField,
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
        <DateField source="timestamp" label="Date" locales={"en-GB"} />
        <RichTextField source="description" />
        <BooleanField source="visible" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ArticleShow;
