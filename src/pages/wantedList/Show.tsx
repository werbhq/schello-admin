import {
  EditButton,
  ImageField,
  ListButton,
  NumberField,
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
} from "react-admin";
import { FacialDataField } from "components/face/FaceField";
import MAPPING from "provider/mapping";
import { DrugListDataGrid } from "pages/drugReports/List";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";

const WantedPersonShowAction = () => (
  <TopToolbar>
    <EditButton />
    <ListButton />
  </TopToolbar>
);

export const WantedPersonShow = () => (
  <AuthenticatedExcise>
    <Show title="Wanted Person Details" actions={<WantedPersonShowAction />}>
      <SimpleShowLayout>
        <TextField source="name" emptyText="-" />
        <NumberField source="age" emptyText="-" />
        <ImageField source="photoUrl" label="Photo" />
        <FacialDataField />
        <ReferenceArrayField source="reported" reference={MAPPING.DRUG_REPORTS}>
          <DrugListDataGrid />
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  </AuthenticatedExcise>
);
