import {
  ImageField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { FacialDataField } from "../../components/face/FaceField";

export const WantedPersonShow = () => (
  <Show title="Wanted Person Details">
    <SimpleShowLayout>
      <TextField source="name" emptyText="-" />
      <NumberField source="age" emptyText="-" />
      <ImageField source="photoUrl" label="Photo" />
      <FacialDataField />
    </SimpleShowLayout>
  </Show>
);
