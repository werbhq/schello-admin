import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

const ArticleEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" required />
        <TextInput source="author" required />
        <TextInput source="email" required />
        <DateInput source="timestamp" label="Date" required />
        <BooleanInput source="visible" required />
      </SimpleForm>
    </Edit>
  );
};

export default ArticleEdit;
