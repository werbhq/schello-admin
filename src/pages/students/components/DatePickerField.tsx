import { useRecordContext } from "react-admin";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Student } from "types/Student";
import { useUpdate } from "react-admin";
import MAPPING from "provider/mapping";
import { Stack, Typography } from "@mui/material";

const DatePickerField = () => {
  const record = useRecordContext<Student>();
  const [update] = useUpdate();

  if (!record) return <></>;

  const date = record?.blockTill ? dayjs(record?.blockTill) : null;

  return (
    <Stack direction="column" display={"flex"}>
      <Typography fontSize="0.75em" color="rgba(0, 0, 0, 0.6)">
        Blocked Till
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => {
              update(MAPPING.STUDENTS, {
                id: record?.id,
                data: { ...record, blockTill: newValue?.toISOString() ?? null },
                previousData: record,
              });
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </Stack>
  );
};

export default DatePickerField;
