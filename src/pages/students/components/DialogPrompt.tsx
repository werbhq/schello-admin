import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Input,
} from "@mui/material";
import useTenant from "hooks/useTenant";
import MAPPING from "provider/mapping";
import { useState } from "react";
import { useGetOne, useUpdate } from "react-admin";
import { Config } from "types/Config";

export default function DialogPrompt({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const tenant = useTenant();
  const [input, setInput] = useState<number>(1);

  const [update] = useUpdate<Config>(MAPPING.CONFIG, {
    id: tenant,
    data: { studentThreshold: input },
  });

  const { data } = useGetOne<Config>(MAPPING.CONFIG, {
    id: tenant,
  });

  const handleClose = () => setOpen(false);

  const handleAnswer = () => {
    setOpen(false);
    update();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Set Investigate Threshold</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter a number</DialogContentText>
        <DialogActions>
          <Input
            type="number"
            defaultValue={data?.studentThreshold ?? 1}
            onChange={(e) => setInput(parseInt(e.target.value))}
          />
          <Button onClick={handleAnswer}>submit</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
