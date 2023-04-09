import { useGetOne } from "react-admin";
import MAPPING from "provider/mapping";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import InfoIcon from "@mui/icons-material/Info";
import AutoRenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Student } from "types/Student";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export const ThresholdField = ({
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

export const InvestigateField = (record: Student) => {
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
