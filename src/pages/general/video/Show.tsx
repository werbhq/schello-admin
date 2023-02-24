import {
  BooleanField,
  DateField,
  ImageField,
  RichTextField,
  SelectField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";
import { PlatForm } from "../../../utils/platform";
import { convertSingleValueListToSelectList } from "../../../utils/helpers";

export const VideoShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="author" />
        <TextField source="email" />
        <SelectField
          source="platform"
          choices={PlatForm.options.map(convertSingleValueListToSelectList)}
        />
        <UrlField source="url" />
        <ImageField source="thumbnail" />
        <RichTextField source="description" />
        <DateField source="timestamp" label="Date" locales={"en-GB"} />
        <BooleanField source="visible" />
      </SimpleShowLayout>
    </Show>
  );
};

export default VideoShow;
