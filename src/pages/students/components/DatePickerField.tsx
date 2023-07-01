import { useRecordContext, useRefresh } from "react-admin";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StudentReport } from "types/Report";
import { useUpdate } from "react-admin";
import MAPPING from "provider/mapping";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Typography } from "@mui/material";

const DatePickerField = () => {
  const record = useRecordContext<StudentReport>();
  const [update] = useUpdate();
  const refresh = useRefresh();

  if (!record) return <></>;

  const date = record?.blockTill ? dayjs(record?.blockTill) : null;

  return (
    <Stack direction="column">
      <Typography fontSize="0.75em" color="rgba(0, 0, 0, 0.6)">
        Blocked Till
      </Typography>
      <Stack direction="row" spacing="1" height="5rem">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker", "DatePicker"]}>
            <DatePicker
              label="Date"
              value={date}
              format="DD-MM-YYYY"
              onChange={(newValue) => {
                update(MAPPING.STUDENTS, {
                  id: record?.id,
                  data: {
                    ...record,
                    blockTill: newValue?.toISOString() ?? null,
                  },
                  previousData: record,
                });
                refresh();
              }}
            />
          </DemoContainer>
          <IconButton
            disableRipple
            onClick={() => {
              update(MAPPING.STUDENTS, {
                id: record?.id,
                data: {
                  ...record,
                  blockTill: null,
                },
                previousData: record,
              });
            }}
          >
            <DeleteIcon />
          </IconButton>
        </LocalizationProvider>
      </Stack>
    </Stack>
  );
};

export default DatePickerField;
