import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  ReferenceField,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { MAPPING } from "../../provider/mapping";
import { status_color } from "./constant";
import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";
import { FacialDataField } from "./components/FaceFields";

const DrugShow = () => {
  return (
    <AuthenticatedExcise>
      <Show>
        <SimpleShowLayout>
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
                label={record[source].replace("_", " ")}
                variant="outlined"
              />
            )}
          />
          <TextField source="description" />
          <ReferenceField
            source="studentId"
            reference={MAPPING.STUDENTS}
            link="show"
            emptyText="-"
          >
            <TextField source="name" />
          </ReferenceField>

          <FacialDataField />
          <LocationField source="location" />
        </SimpleShowLayout>
      </Show>
    </AuthenticatedExcise>
  );
};

export default DrugShow;
