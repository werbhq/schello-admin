import { Edit, SimpleForm, TextInput } from "react-admin";
import { FacialDataInput } from "../../components/face/FaceInput";

export const WantedPersonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="photoUrl" />
      <FacialDataInput source="facialData" />
      {/* <ImageInput source="pictures" label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput> */}
    </SimpleForm>
  </Edit>
);
