import { ReportsPassAuth } from "../../Utils/report_auth";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ReportAPI } from "../../api/report";

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
  const [authorized, setAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ReportsPassAuth.checkPassword()) setAuthorized(false);

    const checkPassword = async () => {
      return await ReportAPI.AUTH(await ReportsPassAuth.getPassword());
    };

    checkPassword()
      .then(setAuthorized)
      .then(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <CircularProgress sx={{ padding: "20px" }} />
  ) : authorized ? (
    children
  ) : (
    <ReportPassword />
  );
};

export default AuthenticatedExcise;
