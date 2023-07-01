import {
  TextField,
  DateField,
  Show,
  SimpleShowLayout,
  ReferenceField,
  FunctionField,
  ReferenceArrayField,
  Datagrid,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import MAPPING from "provider/mapping";
import { STATUS_COLOR } from "./constant";
import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";
import { FacialDataField } from "components/face/FaceField";
import { Report } from "types/Report";
import useIsExcise from "hooks/useIsExcise";

const DrugShow = () => {
  const isExcise = useIsExcise();

  return (
    <AuthenticatedExcise>
      <Show>
        <SimpleShowLayout>
          {isExcise && (
            <FunctionField
              source="tenant"
              label="School"
              render={(e: Report) => {
                return `${e.tenant?.replace("-", " ").toLocaleUpperCase()}`;
              }}
            />
          )}
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

          <TextField
            label="Student Name (Submitted)"
            source="student.name"
            emptyText="-"
          />
          <TextField
            label="Student Class (Submitted)"
            source="student.class"
            emptyText="-"
          />

          <ReferenceArrayField
            label="Possible Students"
            reference={MAPPING.STUDENTS}
            source="studentIds"
            emptyText="-"
          >
            <Datagrid bulkActionButtons={false}>
              <TextField source="name" />
              <TextField source="admnNo" label="Admission No" />
              <TextField source="rollNo" />
              <TextField source="classId" />
            </Datagrid>
          </ReferenceArrayField>

          <ReferenceField
            label="Confirmed Student"
            source="studentConfirmed"
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
