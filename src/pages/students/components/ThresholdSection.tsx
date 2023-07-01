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
import useTenant from "hooks/useTenant";
import { Config } from "types/Config";

export const ThresholdField = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const tenant = useTenant();
  const { data, isLoading, isError } = useGetOne<Config>(MAPPING.CONFIG, {
    id: tenant,
  });

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
              {data?.studentThreshold ?? "none"}
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
  const tenant = useTenant();
  const { data, isLoading } = useGetOne<Config>(MAPPING.CONFIG, { id: tenant });

  if (isLoading) return <></>;
  if (!data) return <></>;

  return (
    <span>
      {record["reported"].length > data.studentThreshold ? (
        <CheckIcon />
      ) : (
        <CrossIcon />
      )}
    </span>
  );
};
