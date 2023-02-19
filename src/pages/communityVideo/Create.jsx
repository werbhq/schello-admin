import {
  BooleanInput,
  Create,
  DateField,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

const VideoCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" required />
      <TextInput source="author" required />
      <TextInput source="email" required />
      <TextInput source="platform" required />
      <RichTextInput source="description" required />
      <DateInput source="timestamp" required />
      <BooleanInput source="visible" required />
    </SimpleForm>
  </Create>
);

export default VideoCreate;
