import {
  BooleanInput,
  DateField,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

import { RichTextInput } from "ra-input-rich-text";

const VideoEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" required />
        <TextInput source="author" required />
        <TextInput source="email" required />
        <TextInput source="platform" required />
        <RichTextInput source="description" size="large" required />
        <DateInput source="timestamp" required />
        <BooleanInput source="visible" required />
      </SimpleForm>
    </Edit>
  );
};

export default VideoEdit;
