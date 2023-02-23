import { FormLabel, Stack, Typography } from "@mui/material";
import { useRecordContext } from "react-admin";
import FACE_DATA from "./FaceData";

export const FacialDataField = (props) => {
  const { facialData } = useRecordContext();

  return (
    <Stack spacing={1}>
      <FormLabel sx={{ fontSize: "0.75em" }}>Facial Features</FormLabel>
      {facialData ? (
        <Stack paddingLeft={2}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="centre"
            justifyContent="centre"
          >
            {Array.from(FACE_DATA.keys()).map((e, index) => {
              const { label, data } = FACE_DATA.get(e);
              return (
                <Stack
                  spacing={1}
                  alignItems="centre"
                  justifyContent="centre"
                  key={index}
                >
                  <FormLabel sx={{ fontSize: "0.75em" }}>{label}</FormLabel>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    {facialData[e]}
                  </Typography>
                  <img
                    src={data.find((_e) => _e.value === facialData[e]).image}
                    alt={e}
                    height={"80px"}
                  />
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      ) : (
        <Typography>-</Typography>
      )}
    </Stack>
  );
};
