import {
  ReferenceArrayField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import MAPPING from "provider/mapping";
import { DrugListDataGrid } from "pages/drugReports/List";
import { Stack, Typography } from "@mui/material";
import DatePickerValue from "./components/DatePicker";
import dayjs from "dayjs";
import { Student } from "types/Student";

const DatePickerBox = () => {
  const record = useRecordContext<Student>();

  const date = !record?.blockTill ? null : dayjs(record?.blockTill);

  if (!record) {
    return <></>;
  }
  return (
    <Stack direction="column" display={"flex"}>
      <Typography fontSize="0.75em" color="rgba(0, 0, 0, 0.6)">
        Blocked Till
      </Typography>
      <DatePickerValue newDate={date} record={record} />
    </Stack>
  );
};

const StudentShow = () => {
  return (
    <AuthenticatedExcise>
      <Show>
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="classId" />
          <DatePickerBox />
          <ReferenceArrayField
            source="reported"
            reference={MAPPING.DRUG_REPORTS}
          >
            <DrugListDataGrid />
          </ReferenceArrayField>
        </SimpleShowLayout>
      </Show>
    </AuthenticatedExcise>
  );
};

export default StudentShow;
