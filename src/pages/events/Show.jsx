import {
  BooleanField,
  DateField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

export const EventShow = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="mode" />
        <TextField source="title" />
        <BooleanField source="visible" />
        <UrlField source="register_url" emptyText="N/A" />
        <DateField source="date_from" locales={"en-GB"} />
        <DateField source="date_to" locales={"en-GB"} />
        <DateField source="time_from" showDate={false} showTime={true} />
        <DateField source="time_to" showDate={false} showTime={true} />
        <UrlField source="venue" />
        <RichTextField source="description" />
      </SimpleShowLayout>
    </Show>
  );
};

export default EventShow;
