import {
  BooleanInput,
  Create,
  DateInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { newsList } from "./constant";
import { RichTextInput } from "ra-input-rich-text";
import { useState } from "react";
import useTenant from "hooks/useTenant";

const NewsCreate = () => {
  const tenant = useTenant();
  const transform = (data: any) => ({
    ...data,
    tenant,
  });
  const [type, setType] = useState(newsList[1].id);

  return (
    <Create redirect="show" transform={transform}>
      <SimpleForm>
        <TextInput source="title" required />
        <SelectInput
          choices={newsList}
          defaultValue={type}
          source="news_type"
          required
          onChange={(e) => setType(e.target.value)}
        />
        <DateInput source="timestamp" label="Date" required />
        {type === "EXTERNAL" && <TextInput source="redirect_url" required />}
        <RichTextInput source="description" isRequired />
        <BooleanInput source="visible" />
      </SimpleForm>
    </Create>
  );
};

export default NewsCreate;
