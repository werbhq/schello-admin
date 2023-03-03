import {
  Datagrid,
  TextField,
  List,
  DateField,
  ReferenceField,
  FunctionField,
  BulkUpdateButton,
} from "react-admin";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { MAPPING } from "../../provider/mapping";
import { STATUS_COLOR, REPORT_STATUS } from "./constant";
import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import LoopIcon from "@mui/icons-material/Loop";
import DoneIcon from "@mui/icons-material/Done";
import { Report } from "../../types/Report";

const BulkActionButtons = () => (
  <>
    <BulkUpdateButton
      label="Mark as SPAM"
      data={{ status: REPORT_STATUS.SPAM }}
      icon={<ReportProblemIcon />}
    />
    <BulkUpdateButton
      label="Mark as In progress"
      data={{ status: REPORT_STATUS.INPROGRESS }}
      icon={<LoopIcon />}
    />
    <BulkUpdateButton
      label="Mark as Done"
      data={{ status: REPORT_STATUS.DONE }}
      icon={<DoneIcon />}
    />
  </>
);

export const DrugListDataGrid = () => {
  return (
    <Datagrid rowClick="show" bulkActionButtons={<BulkActionButtons />}>
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
      <ReferenceField
        source="studentId"
        reference={MAPPING.STUDENTS}
        link="show"
        emptyText="-"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        source="wantedPersonId"
        reference={MAPPING.WANTED_LIST}
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
