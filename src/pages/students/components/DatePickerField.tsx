import { useRecordContext } from "react-admin";

import { Stack, Typography } from "@mui/material";
import DatePickerValue from "./DatePicker";
import dayjs from "dayjs";
import { Student } from "types/Student";

const DatePickerField = () => {
  const record = useRecordContext<Student>();

  if (!record) return <></>;

  const date = record?.blockTill ? null : dayjs(record?.blockTill);

  return (
    <Stack direction="column" display={"flex"}>
      <Typography fontSize="0.75em" color="rgba(0, 0, 0, 0.6)">
        Blocked Till
      </Typography>
      <DatePickerValue newDate={date} record={record} />
    </Stack>
  );
};

export default DatePickerField;
