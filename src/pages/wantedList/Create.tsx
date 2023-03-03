import { Create, SimpleForm, TextInput } from "react-admin";
import { FacialDataInput } from "../../components/face/FaceInput";

export const WantedPersonCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="photoUrl" fullWidth />
      <FacialDataInput source="facialData" />
    </SimpleForm>
  </Create>
);
