import {
  BooleanInput,
  DateInput,
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { newsList } from "./constant";
import { RichTextInput } from "ra-input-rich-text";
import { useState } from "react";

const ArticleEdit = () => {
  const [type, setType] = useState(newsList[1].id);

  return (
    <Edit>
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
    </Edit>
  );
};

export default ArticleEdit;
