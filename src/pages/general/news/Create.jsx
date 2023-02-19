import {
  BooleanInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ArticleCreate = () => (
  <Create redirect="show">
    <SimpleForm>
      <TextInput source="title" required />
      <TextInput source="author" required />
      <TextInput source="email" required />
      <DateInput source="timestamp" label="Date" required />
      <BooleanInput source="visible" required />
    </SimpleForm>
  </Create>
);

export default ArticleCreate;