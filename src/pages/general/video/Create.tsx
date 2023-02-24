import {
  BooleanInput,
  DateInput,
  Create,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { convertSingleValueListToSelectList } from "../../../utils/helpers";
import { PlatForm } from "../../../utils/platform";
import { GeneralVideo } from "../../../types/General Awarness";

const VideoCreate = () => (
  <Create
    transform={(data: GeneralVideo) => ({
      ...data,
      thumbnail: PlatForm.getThumbnailUrl(data.url, data.platform),
    })}
    redirect="show"
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
  </Create>
);
export default VideoCreate;
