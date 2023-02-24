import {
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  Toolbar,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { STATUS_TYPE } from "./constant";

const CustomToolbar = (props: any) => (
  <Toolbar {...props} sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const DrugEdit = () => {
  return (
    <AuthenticatedExcise>
      <Edit>
        <SimpleForm toolbar={<CustomToolbar />}>
          <SelectInput choices={STATUS_TYPE} source="status" required />
        </SimpleForm>
      </Edit>
    </AuthenticatedExcise>
  );
};

export default DrugEdit;
