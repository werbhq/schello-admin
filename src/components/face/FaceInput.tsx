import { SelectInput, WrapperField } from "react-admin";
import FACE_DATA from "./FaceData";

export const FacialDataInput = ({ source, ...rest }: { source?: string }) => {
  const sourceString = source ?? "facialData";
  return (
    <WrapperField {...rest}>
      {Array.from(FACE_DATA.keys()).map((e) => {
        return (
          <SelectInput
            source={`${sourceString}.${e}`}
            label={FACE_DATA.get(e)?.label ?? ""}
            choices={Array.from(FACE_DATA.get(e)?.data ?? []).map((e) => ({
              id: e.value,
              name: e.label,
            }))}
          />
        );
      })}
    </WrapperField>
  );
};
