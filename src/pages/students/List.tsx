import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
  useGetOne,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { Student } from "types/Student";
import MAPPING from "provider/mapping";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useState } from "react";
import DialogPrompt from "./components/DialogPrompt";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import IconButton from "@mui/material/IconButton";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const ThreshHoldSection = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const changeHandle = () => {
    setOpen(true);
  };

  const { data, isLoading, isError } = useGetOne(MAPPING.TRH, { id: "theta" });

  if (isLoading) {
    return <CircularProgress />;
  }
  if (isError) return <span></span>;

  return (
    <Stack
      direction="row"
      justifyContent="left"
      alignItems="left"
      spacing={1}
      margin={2}
      marginBottom={0}
      fontSize="0.875rem"
      padding={1.5}
      sx={{ backgroundColor: "#F5F5F5" }}
    >
      <Typography fontSize="inherit">Threshold Value</Typography>
      <Typography
        color="blue"
        sx={{
          backgroundColor: "white",
          padding: "0px 4px",
          borderRadius: "3px",
        }}
        fontSize="inherit"
      >
        {data?.degree ?? "none"}
      </Typography>
      <IconButton
        sx={{
          fontSize: "inherit",
          fontWeight: "inherit",
          padding: "0",
          color: "blue",
        }}
        onClick={changeHandle}
      >
        <AutorenewRoundedIcon />
      </IconButton>
    </Stack>
  );
};

const InvestigateField = (record: Student) => {
  const { data, isLoading } = useGetOne(MAPPING.TRH, { id: "theta" });

  if (isLoading) return <></>;

  return (
    <span>
      {record["reported"].length > data?.degree ? <DoneIcon /> : <CloseIcon />}
    </span>
  );
};

const StudentList = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AuthenticatedExcise>
      <List exporter={false} filters={filters}>
        <ThreshHoldSection setOpen={setOpen} />
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="classId" />
          <FunctionField
            source="reported"
            render={(resource: Student) => resource["reported"].length}
          ></FunctionField>

          <FunctionField
            source="reported"
            label="Investigate"
            render={(record: Student) => <InvestigateField {...record} />}
          ></FunctionField>
        </Datagrid>
      </List>

      {open ? <DialogPrompt setOpen={setOpen} /> : ""}
    </AuthenticatedExcise>
  );
};

export default StudentList;
