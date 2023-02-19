import { RichTextInput } from "ra-input-rich-text";
import {
  BooleanInput,
  Create,
  DateInput,
  SelectInput,
  SimpleForm,
  TextInput,
  TimeInput,
} from "react-admin";
import { eventModes } from "./Constants";

const EventCreate = () => (
  <Create redirect="show">
    <SimpleForm>
      <SelectInput source="mode" choices={eventModes} required />
      <TextInput source="title" required />
      <DateInput source="date_from" required />
      <DateInput source="date_to" required />
      <TimeInput source="time_from" required />
      <TimeInput source="time_to" required />
      <RichTextInput source="description" required />
      <TextInput source="venue" required />
      <TextInput source="register_url" defaultValue={null} />
      <BooleanInput source="visible" required />
    </SimpleForm>
  </Create>
);

export default EventCreate;
