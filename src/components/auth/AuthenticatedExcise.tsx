import { ReportsPassAuth } from "../../utils/report_auth";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useNotify, useRedirect } from "react-admin";

const ReportPassword = () => {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    ReportsPassAuth.setPassword(password);
    setOpen(false);
    window.location.reload();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown
      onKeyUp={(e) => {
        if (e.key === "Enter") handleClose();
      }}
    >
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
        <form onSubmit={handleClose}>
          <Button type="submit">Submit</Button>
        </form>
      </DialogActions>
    </Dialog>
  );
};

function Loader() {
  return (
    <Dialog open={true} disableEscapeKeyDown>
      <DialogTitle>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
          <Typography variant="h6">Checking decryption key..</Typography>
        </Stack>
      </DialogTitle>
    </Dialog>
  );
}

const AuthenticatedExcise = ({ children }: { children: ReactNode }) => {
  const [authorized, setAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const notify = useNotify();
  const redirect = useRedirect();

  useEffect(() => {
    if (!ReportsPassAuth.checkPasswordInLocalStore()) {
      setAuthorized(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    ReportsPassAuth.checkPassword()
      .then((e) => {
        setAuthorized(e);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setAuthorized(false);
        notify(`A problem occurred checking access key: ${e.message}`, {
          type: "error",
        });
        redirect("/");
      });
  }, [notify, redirect]);

  return (
    <>{isLoading ? <Loader /> : authorized ? children : <ReportPassword />}</>
  );
};

export default AuthenticatedExcise;
