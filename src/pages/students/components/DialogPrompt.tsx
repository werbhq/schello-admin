import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Input,
} from "@mui/material";
import MAPPING from "provider/mapping";
import { useState } from "react";
import { useUpdate } from "react-admin";

export default function DialogPrompt({
  setThreshHold,
  setOpen,
}: {
  setThreshHold: React.Dispatch<React.SetStateAction<number | undefined>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [input, setInput] = useState<number>(1);

  const [update] = useUpdate(MAPPING.TRH, {
    id: "theta",
    data: { degree: input },
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleAnswer = () => {
    setOpen(false);
    setThreshHold(input);
    update();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{"Set Threshold"}</DialogTitle>
      <DialogContent>
        <DialogContentText>(Enter a number)</DialogContentText>
        <DialogActions>
          <Input
            defaultValue={1}
            onChange={(e) => {
              setInput(parseInt(e.target.value));
            }}
          />
          <Button onClick={handleAnswer}>submit</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
