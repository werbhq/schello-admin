import {
  DeleteButton,
  EditButton,
  ImageField,
  ListButton,
  Show,
  SimpleShowLayout,
  TopToolbar,
} from "react-admin";
import { FacialDataField } from "../drugReports/components/FaceFields";

const WantedPersonShowAction = () => (
  <TopToolbar>
    <DeleteButton />
    <EditButton />
    <ListButton />
  </TopToolbar>
);

export const WantedPersonShow = () => (
  <Show title="Wanted Person Details" actions={<WantedPersonShowAction />}>
    <SimpleShowLayout>
      <ImageField source="photoUrl" label="CriminalPhoto" />
      <FacialDataField />
    </SimpleShowLayout>
  </Show>
);
