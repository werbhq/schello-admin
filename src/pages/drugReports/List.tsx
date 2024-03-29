import {
  Datagrid,
  TextField,
  List,
  DateField,
  ReferenceField,
  FunctionField,
  BulkUpdateButton,
  TextInput,
  SelectInput,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import MAPPING from "provider/mapping";
import { STATUS_COLOR, REPORT_STATUS, STATUS_TYPE } from "./constant";
import { Chip } from "@mui/material";
import LocationField from "./components/LocationField";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import LoopIcon from "@mui/icons-material/Loop";
import DoneIcon from "@mui/icons-material/Done";
import { Report } from "types/Report";
import useIsExcise from "hooks/useIsExcise";

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
  const isExcise = useIsExcise();

  return (
    <Datagrid rowClick="show" bulkActionButtons={<BulkActionButtons />}>
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
      <ReferenceField
        source="studentConfirmed"
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

const postFilters = [
  <SelectInput choices={STATUS_TYPE} source="status" />,
  <TextInput label="Location Id" source="location.id" />,
];

const DrugList = () => {
  return (
    <AuthenticatedExcise>
      <List filters={postFilters}>
        <DrugListDataGrid />
      </List>
    </AuthenticatedExcise>
  );
};

export default DrugList;
