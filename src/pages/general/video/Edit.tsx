import {
  BooleanInput,
  DateInput,
  Edit,
  TextInput,
  SelectInput,
  SimpleForm,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { convertSingleValueListToSelectList } from "utils/helpers";
import { PlatForm } from "utils/platform";

const VideoEdit = () => {
  return (
    <Edit
      transform={(data) => ({
        ...data,
        thumbnail: PlatForm.getThumbnailUrl(data.url, data.platform),
      })}
    >
      <SimpleForm>
        <TextInput source="title" required />
        <TextInput source="author" required />
        <TextInput source="email" required />
        <SelectInput
          source="platform"
          choices={PlatForm.options.map(convertSingleValueListToSelectList)}
          required
        />
        <TextInput source="url" required />
        <RichTextInput source="description" isRequired />
        <DateInput source="timestamp" label="Date" required />
        <BooleanInput source="visible" />
      </SimpleForm>
    </Edit>
  );
};

export default VideoEdit;
