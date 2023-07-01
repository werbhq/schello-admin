import { useGetOne } from "react-admin";
import MAPPING from "provider/mapping";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { StudentReport } from "types/Report";
import CheckIcon from "@mui/icons-material/Done";
import CrossIcon from "@mui/icons-material/Close";

export const ThresholdField = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, isLoading, isError } = useGetOne(
    MAPPING.CONFIG.COLLECTION_NAME,
    {
      id: MAPPING.CONFIG.STUDENT_REPORT_THRESHOLD_DOC,
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
          <Tooltip title="If a students report count exceeds this number it will be flagged for Investigation">
            <Typography
              sx={{
                backgroundColor: "white",
                padding: "0px 5px",
                fontWeight: "bold",
                fontSize: "inherit",
              }}
            >
              {data?.threshold ?? "none"}
            </Typography>
          </Tooltip>
          <IconButton size="small" onClick={changeHandle} sx={{ padding: "0" }}>
            <EditIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export const InvestigateField = (record: StudentReport) => {
  const { data, isLoading } = useGetOne(MAPPING.CONFIG.COLLECTION_NAME, {
    id: MAPPING.CONFIG.STUDENT_REPORT_THRESHOLD_DOC,
  });

  if (isLoading) return <></>;

  return (
    <span>
      {record["reported"].length > data?.threshold ? (
        <CheckIcon />
      ) : (
        <CrossIcon />
      )}
    </span>
  );
};
