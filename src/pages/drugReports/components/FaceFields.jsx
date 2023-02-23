import { FormLabel, Stack, Typography } from "@mui/material";
import { useRecordContext } from "react-admin";
import FACE_DATA from "./FaceData";

export const FacialDataField = (props) => {
  const { facialData } = useRecordContext();

  const style = {
    gender: { label: "Gender" },
    hairType: { label: "Hair Type" },
    skinColor: { label: "Skin Type" },
    eyeColor: { label: "Eye Type" },
    faceShape: { label: "Face Type" },
  };

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
            {Object.keys(style).map((e) => {
              return (
                <Stack spacing={1} alignItems="centre" justifyContent="centre">
                  <FormLabel sx={{ fontSize: "0.75em" }}>
                    {style[e].label}
                  </FormLabel>
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    {facialData[e]}
                  </Typography>
                  <img
                    src={
                      FACE_DATA[e].find((_e) => _e.value === facialData[e])
                        .image
                    }
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
