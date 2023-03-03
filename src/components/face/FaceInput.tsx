import { SelectInput, useRecordContext } from "react-admin";
import FACE_DATA from "./FaceData";
import { WantedList } from "../../types/WantedList";
import { FormLabel, Stack } from "@mui/material";
import { useState } from "react";

export const FacialDataInput = ({ source, ...rest }: { source?: string }) => {
  const sourceString = source ?? "facialData";
  const record = useRecordContext<WantedList>();

  const defaultFacialVars = {
    hairType: null,
    skinColor: null,
    gender: null,
    eyeColor: null,
    faceShape: null,
  };

  const [facialData, setFacialData] = useState(
    record?.facialData ?? defaultFacialVars
  );

  return (
    <Stack spacing={0}>
      <FormLabel sx={{ fontSize: "0.75em" }}>Facial Features*</FormLabel>
      <Stack paddingLeft={2} spacing={2} direction="row">
        {Array.from(FACE_DATA.keys()).map((e, index) => {
          const image = FACE_DATA.get(e)?.data.find(
            (_e) => _e.value === facialData[e]
          )?.image;

          return (
            <Stack alignItems="center" justifyContent="center" key={index}>
              <SelectInput
                key={index}
                source={`${sourceString}.${e}`}
                label={FACE_DATA.get(e)?.label ?? ""}
                required
                choices={Array.from(FACE_DATA.get(e)?.data ?? [])
                  .filter((e) => e.value !== "NONE")
                  .map((e) => ({
                    id: e.value,
                    name: e.label,
                  }))}
                onChange={(v) => {
                  setFacialData({ ...facialData, [e]: v.target.value });
                }}
              />
              {image && <img src={image} height="80px" alt="-" />}
              {!image && <div style={{ height: "80px" }} />}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
