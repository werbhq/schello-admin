import {
  EditButton,
  ImageField,
  Show,
  SimpleShowLayout,
  TopToolbar,
} from "react-admin";
import { FacialDataField } from "../drugReports/components/FaceFields";

const WantedPersonShowAction = () => (
  <TopToolbar>
    <EditButton />
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
