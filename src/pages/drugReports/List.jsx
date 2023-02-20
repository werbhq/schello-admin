import {
  Datagrid,
  TextField,
  List,
  DateField,
  ReferenceField,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { MAPPING } from "../../provider/mapping";
import { status_color } from "./constant";

import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";

export const DrugListDataGrid = (props) => {
  return (
    <Datagrid rowClick="show" {...props}>
      <DateField source="dateIncident" locales={"en-GB"} />
      <DateField
        source="timeFrom"
        showTime
        showDate={false}
        options={{ timeStyle: "short" }}
      />
      <DateField
        source="timeTo"
        showTime
        showDate={false}
        options={{ timeStyle: "short" }}
      />
      <FunctionField
        source="status"
        render={(record, source) => (
          <Chip
            label={record[source].replace("_", " ")}
            color={status_color[record.status]}
            variant="outlined"
          />
        )}
      />
      <FunctionField
        source="category"
        render={(record, source) => (
          <Chip label={record[source].replace("-", " ")} variant="outlined" />
        )}
      />
      <ReferenceField
        source="studentId"
        reference={MAPPING.STUDENTS}
        link="show"
        emptyText="-"
      >
        <TextField source="name" />
      </ReferenceField>
      <LocationField source="location" />
    </Datagrid>
  );
};

const DrugList = () => {
  return (
    <AuthenticatedExcise>
      <List>
        <DrugListDataGrid />
      </List>
    </AuthenticatedExcise>
  );
};

export default DrugList;
