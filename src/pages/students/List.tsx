import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
  useGetOne,
  Button,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { Student } from "types/Student";
import MAPPING from "provider/mapping";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";
import DialogPrompt from "./components/DialogPrompt";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const ThreshHoldSection = ({
  setThreshHold,
  setOpen,
}: {
  setThreshHold: React.Dispatch<React.SetStateAction<number | undefined>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const changeHandle = () => {
    setOpen(true);
  };

  const { data, isLoading } = useGetOne(
    MAPPING.TRH,
    { id: "theta" },
    {
      onSuccess: (data) => setThreshHold(data?.degree),

      onError: (error) => {
        console.log("ERROR", error);
      },
    }
  );

  if (isLoading) {
    return <></>;
  }

  return (
    <Stack
      direction="row"
      justifyContent="left"
      alignItems="left"
      spacing={2}
      margin={5}
    >
      <Typography>Threshold value set now</Typography>
      <Typography sx={{ color: "red" }}>{data?.degree ?? "none"}</Typography>
      <Button label="change" onClick={changeHandle} />
    </Stack>
  );
};
const StudentList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [threshHold, setThreshHold] = useState<number>();
  console.log(threshHold);
  return (
    <AuthenticatedExcise>
      <List exporter={false} filters={filters}>
        <ThreshHoldSection setThreshHold={setThreshHold} setOpen={setOpen} />
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="classId" />
          <FunctionField
            source="reported"
            render={(resource: Student) => resource["reported"].length}
          ></FunctionField>
          <FunctionField
            source="reported"
            label="investigate"
            render={(resource: Student) =>
              resource["reported"].length > (threshHold ?? 10)
                ? "investigate"
                : ""
            }
          ></FunctionField>
        </Datagrid>
      </List>

      {open ? (
        <DialogPrompt setOpen={setOpen} setThreshHold={setThreshHold} />
      ) : (
        ""
      )}
    </AuthenticatedExcise>
  );
};

export default StudentList;
