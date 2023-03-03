import {
  EditButton,
  ImageField,
  ListButton,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { FacialDataField } from "../../components/face/FaceField";

const WantedPersonShowAction = () => (
  <TopToolbar>
    <EditButton />
    <ListButton />
  </TopToolbar>
);

export const WantedPersonShow = () => (
  <Show title="Wanted Person Details" actions={<WantedPersonShowAction />}>
    <SimpleShowLayout>
      <TextField source="name" emptyText="-" />
      <NumberField source="age" emptyText="-" />
      <ImageField source="photoUrl" label="Photo" />
      <FacialDataField />
    </SimpleShowLayout>
  </Show>
);
