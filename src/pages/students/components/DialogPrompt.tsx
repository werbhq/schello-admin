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
import { useGetOne, useUpdate } from "react-admin";

export default function DialogPrompt({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [input, setInput] = useState<number>(1);

  const [update] = useUpdate(MAPPING.ASSORTED_DATA.COLLECTION, {
    id: MAPPING.ASSORTED_DATA.REPORT_INVESTIGATE_DOC,
    data: { threshold: input },
  });

  const { data } = useGetOne(MAPPING.ASSORTED_DATA.COLLECTION, {
    id: MAPPING.ASSORTED_DATA.REPORT_INVESTIGATE_DOC,
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
            defaultValue={data?.threshold ?? 1}
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
