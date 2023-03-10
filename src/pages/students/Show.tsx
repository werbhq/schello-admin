import {
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import MAPPING from "provider/mapping";
import { DrugListDataGrid } from "pages/drugReports/List";

const StudentShow = () => (
  <AuthenticatedExcise>
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="classId" />
        <ReferenceArrayField source="reported" reference={MAPPING.DRUG_REPORTS}>
          <DrugListDataGrid />
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  </AuthenticatedExcise>
);

export default StudentShow;
