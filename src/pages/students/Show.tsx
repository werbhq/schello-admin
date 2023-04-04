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
    <Stack
      direction="column"
      display={"flex"}
      spacing={1}
      margin={4}
      padding={1}
      sx={{ backgroundColor: "#F9E4AE",borderRadius:"2px" }}
    >
      <Typography>Reports Blocked Till</Typography>
      <DatePickerValue newDate={date} record={record} />
    </Stack>
  );
};

const StudentShow = () => {
  return (
    <AuthenticatedExcise>
      <Show>
        <DatePickerBox />
        <SimpleShowLayout>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="classId" />
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
