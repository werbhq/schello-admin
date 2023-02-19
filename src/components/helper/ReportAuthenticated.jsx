import { ReportsPassAuth } from "../../Utils/report_auth";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import { useState } from "react";

const ReportPassword = () => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    ReportsPassAuth.setPassword(password);
    setOpen(false);
    window.location.reload(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
      <DialogTitle>Accessing Drug Reports</DialogTitle>
      <DialogContent>
        <DialogContentText>Provide the decryption password</DialogContentText>
        <Input
          name="reports_password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

const AuthenticatedExcise = ({ children }) => {
  return ReportsPassAuth.checkPassword() ? children : <ReportPassword />;
};

export default AuthenticatedExcise;
