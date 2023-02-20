import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

export default function DialogPrompt({ setAnswer, setOpen }) {
  const handleClose = () => {
    setOpen(false);
    setAnswer(false);
  };

  const handleAnswer = () => {
    setOpen(false);
    setAnswer(true);
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>{"Are you sure to change decryption key?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Once the decryption key is changed there is no way to get the new data
          without the key
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleAnswer}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}
