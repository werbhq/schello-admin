import {
  Create,
  SimpleForm,
  TextInput,
  required,
  SelectInput,
} from "react-admin";

export const WantedPersonCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="photoUrl"  fullWidth />

      <SelectInput
        source="facialData.gender"
        choices={[
          { id: "MALE", name: "MALE" },
          { id: "FEMALE", name: "FEMALE" },
        ]}
      />

      <SelectInput
        source="facialData.hairType"
        choices={[
          { id: "STRAIGHT", name: "STRAIGHT" },
          { id: "WAVY", name: "WAVY" },
          { id: "CURLY", name: "CURLY" },
          { id: "KINKY", name: "KINKY" },
        ]}
      />
      <SelectInput
        source="facialData.eyeColor"
        choices={[
          { id: "BLACK", name: "BLACK" },
          { id: "BROWN", name: "BROWN" },
          { id: "BLUE", name: "BLUE" },
          { id: "GREEN", name: "GREEN" },
          { id: "SILVER", name: "SILVER" },
        ]}
      />

      <SelectInput
        source="facialData.skinColor"
        choices={[
          { id: "BROWN", name: "BROWN" },
          { id: "FAIR", name: "FAIR" },
          { id: "OLIVE", name: "OLIVE" },
          { id: "DARK-BROWN", name: "DARK-BROWN" },
          { id: "LIGHT-BROWN", name: "LIGHT-BROWN" },
        ]}
      />

      <SelectInput
        source="facialData.faceShape"
        choices={[
          { id: "DIAMOND", name: "DIAMOND" },
          { id: "OVAL", name: "OVAL" },
          { id: "SQUARE", name: "SQUARE" },
          { id: "ROUND", name: "ROUND" },
          { id: "TRIANGLE", name: "TRIANGLE" },
          { id: "INVERTED-TRIANGLE", name: "INVERTED-TRIANGLE" },
        ]}
      />
    </SimpleForm>
  </Create>
);
