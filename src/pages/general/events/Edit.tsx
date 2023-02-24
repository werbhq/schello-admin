import { RichTextInput } from "ra-input-rich-text";
import {
  BooleanInput,
  DateInput,
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
  TimeInput,
} from "react-admin";

const EventEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <SelectInput
          source="mode"
          choices={[
            { id: "VIRTUAL", name: "VIRTUAL" },
            { id: "OFFLINE", name: "OFFLINE" },
          ]}
          required
        />
        <TextInput source="title" required />
        <DateInput source="date_from" required />
        <DateInput source="date_to" required />
        <TimeInput source="time_from" required />
        <TimeInput source="time_to" required />
        <RichTextInput source="description" isRequired />
        <TextInput source="venue" required />
        <TextInput source="register_url" defaultValue={null} />
        <BooleanInput source="visible" required />
      </SimpleForm>
    </Edit>
  );
};

export default EventEdit;
