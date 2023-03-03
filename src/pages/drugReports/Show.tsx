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
import { STATUS_COLOR } from "./constant";
import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";
import { FacialDataField } from "../../components/face/FaceField";
import { Report } from "../../types/Report";

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
            render={(record: Report) => (
              <Chip
                label={record["status"].replace("_", " ")}
                color={STATUS_COLOR.get(record.status)}
                variant="outlined"
              />
            )}
          />
          <FunctionField
            source="category"
            render={(record: Report) => (
              <Chip
                label={record["category"].replace("_", " ")}
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
