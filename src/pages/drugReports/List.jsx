import {
  Datagrid,
  TextField,
  List,
  DateField,
  ReferenceField,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "../../components/helper/ReportAuthenticated";
import { MAPPING } from "../../provider/mapping";
import { status_color } from "./constant";

import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";

const DrugList = () => {
  return (
    <AuthenticatedExcise>
      <List>
        <Datagrid rowClick="show">
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
              <Chip
                label={record[source].replace("-", " ")}
                variant="outlined"
              />
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
      </List>
    </AuthenticatedExcise>
  );
};

export default DrugList;
