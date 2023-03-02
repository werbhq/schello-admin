import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

export const WantedPersonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="photoUrl" />
      <TextInput source="facialData.eyeColor" />
      <TextInput source="facialData.faceShape" />
      <TextInput source="facialData.gender" />
      <TextInput source="facialData.faceShape" />
      <TextInput source="facialData.hairType" />
      <SelectInput
        source="facialData.hairType"
        choices={[
          { id: "straight", name: "STRAIGHT" },
          { id: "wavy", name: "WAVY" },
          { id: "curly", name: "CURLY" },
          { id: "kinky", name: "KINKY" },
        ]}
      />
      {/* <ImageInput source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput> */}
    </SimpleForm>
  </Edit>
);
