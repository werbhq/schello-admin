import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Student } from "types/Student";
import { useUpdate } from "react-admin";
import MAPPING from "provider/mapping";

export default function DatePickerValue({
  newDate,
  record,
}: {
  newDate: dayjs.Dayjs | null;
  record: Student;
}) {
  const [update] = useUpdate();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          label="Date"
          value={newDate}
          onChange={(newValue) => {
            update(MAPPING.STUDENTS, {
              id: record?.id,
              data: { ...record, block: newValue?.toISOString() ?? "" },
              previousData: record,
            });
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
