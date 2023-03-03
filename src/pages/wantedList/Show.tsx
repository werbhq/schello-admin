import { ImageField, Show, SimpleShowLayout } from "react-admin";
import { FacialDataField } from "../../components/face/FaceField";

export const WantedPersonShow = () => (
  <Show title="Wanted Person Details">
    <SimpleShowLayout>
      <ImageField source="photoUrl" label="CriminalPhoto" />
      <FacialDataField />
    </SimpleShowLayout>
  </Show>
);
