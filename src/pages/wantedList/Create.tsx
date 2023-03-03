import {
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { FacialDataInput } from "../../components/face/FaceInput";

export const WantedPersonCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="name" defaultValue={null} />
      <NumberInput source="age" defaultValue={null} />
      {/* 10e6 = 10MB */}
      <ImageInput source="photoUrl" maxSize={10e6} label="Photo" isRequired>
        <ImageField source="src" />
      </ImageInput>
      <FacialDataInput source="facialData" />
    </SimpleForm>
  </Create>
);
