import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { FacialDataInput } from "../../components/face/FaceInput";

export const WantedPersonCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="age" />
      <TextInput source="photoUrl" fullWidth />
      <FacialDataInput source="facialData" />
    </SimpleForm>
  </Create>
);
