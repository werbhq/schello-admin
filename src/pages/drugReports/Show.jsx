import {
  TextField,
  DateField,
  ImageField,
  ChipField,
  Show,
  SimpleShowLayout,
} from "react-admin";
import AuthenticatedExcise from "../../components/helper/ReportAuthenticated";

const DrugShow = () => {
  return (
    <AuthenticatedExcise>
      <Show>
        <SimpleShowLayout>
          <DateField source="dateIncident" />
          <DateField source="timeFrom" />
          <DateField source="timeTo" />
          <ChipField source="category" />
          <TextField source="description" />
          <ImageField source="image" title="Avatar" alt="Avatar" />
          <TextField source="location.title" />
        </SimpleShowLayout>
      </Show>
    </AuthenticatedExcise>
  );
};

export default DrugShow;
