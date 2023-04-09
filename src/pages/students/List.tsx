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
import InfoIcon from "@mui/icons-material/Info";
import AutoRenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const ThreshHoldSection = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, isLoading, isError } = useGetOne(
    MAPPING.ASSORTED_DATA.COLLECTION,
    {
      id: MAPPING.ASSORTED_DATA.REPORT_INVESTIGATE_DOC,
    }
  );

  if (isLoading) return <CircularProgress />;
  if (isError) return <span></span>;

  const changeHandle = () => setOpen(true);

  return (
    <>
      <Stack direction="row" width="fit-content">
        <Stack
          direction="row"
          spacing={1}
          margin={2}
          marginRight={0}
          fontSize="0.875rem"
          padding={1.5}
          width="fit-content"
          sx={{ backgroundColor: "#F5F5F5", borderRadius: "5px" }}
        >
          <Typography fontSize="inherit">
            Investigate Threshold Value
          </Typography>
          <Typography
            color="black"
            sx={{
              backgroundColor: "white",
              padding: "0px 5px",
              fontWeight: "bold",
              fontSize: "inherit",
            }}
          >
            {data?.threshold ?? "none"}
          </Typography>
          <IconButton
            size="small"
            onClick={changeHandle}
            sx={{
              padding: "0",
              color: "#F1C043",
            }}
          >
            <AutoRenewRoundedIcon />
          </IconButton>
        </Stack>
        <Tooltip
          title="If a students report count exceeds this number it will be flaged for Investigation"
          placement="right"
        >
          <IconButton disableRipple size="small">
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
};

const InvestigateField = (record: Student) => {
  const { data, isLoading } = useGetOne(MAPPING.ASSORTED_DATA.COLLECTION, {
    id: MAPPING.ASSORTED_DATA.REPORT_INVESTIGATE_DOC,
  });

  if (isLoading) return <></>;

  return (
    <span>
      {record["reported"].length > data?.threshold ? (
        <DoneIcon />
      ) : (
        <CloseIcon />
      )}
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
