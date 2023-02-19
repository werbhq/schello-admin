import {
  BooleanField,
  DateField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const VideoShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="author" />
        <TextField source="email" />
        <TextField source="platform" />
        <RichTextField source="description" size="large" />
        <DateField source="timestamp" locales={"en-GB"} />
        <BooleanField source="visible" />
      </SimpleShowLayout>
    </Show>
  );
};

export default VideoShow;
