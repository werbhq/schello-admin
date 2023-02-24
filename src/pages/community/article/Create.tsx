import { RichTextInput } from "ra-input-rich-text";
import {
  BooleanInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ArticleCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" required />
      <TextInput source="author" required />
      <TextInput source="email" required />
      <DateInput source="timestamp" label="Date" required />
      <RichTextInput source="description" />
      <BooleanInput source="visible" required />
    </SimpleForm>
  </Create>
);

export default ArticleCreate;
