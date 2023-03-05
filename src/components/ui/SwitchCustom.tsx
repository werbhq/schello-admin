import { FormControlLabel, Switch } from "@mui/material";

export const SwitchCustom = ({
  enable,
  setEnable,
  label,
}: {
  enable: boolean;
  setEnable: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}) => (
  <FormControlLabel
    control={<Switch checked={enable} />}
    onChange={(e, checked) => setEnable(checked)}
    label={label}
  />
);
