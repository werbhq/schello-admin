import {
  BooleanInput,
  Create,
  DateField,
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
      <DateInput source="timestamp" required />
      <BooleanInput source="visible" required />
    </SimpleForm>
  </Create>
);

export default ArticleCreate;
