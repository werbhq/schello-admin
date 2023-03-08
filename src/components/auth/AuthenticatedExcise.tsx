import { ReportsPassAuth } from "../../utils/report_auth";
import {
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
import { ReactNode, useState } from "react";
import { useDecryptionAuth } from "../../hooks/useDecryptionAuth";
import { LoadingButton } from "@mui/lab";

const PasswordDialog = ({
  refetch,
  authorized,
  loading,
}: {
  refetch: () => {};
  authorized: boolean;
  loading: boolean;
}) => {
  const [password, setPassword] = useState("");

  const handleClose = async () => {
    await ReportsPassAuth.setPassword(password);
    refetch();
  };

  return (
    <Dialog
      open={!authorized}
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
          <LoadingButton type="submit" loading={loading}>
            Submit
          </LoadingButton>
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
  const { authorized, isLoading, refetch, isRefetching } = useDecryptionAuth();

  if (isLoading) return <Loader />;

  return (
    <>
      {authorized && children}
      {!isLoading && (
        <PasswordDialog
          refetch={refetch}
          authorized={authorized ?? false}
          loading={isRefetching}
        />
      )}
    </>
  );
};

export default AuthenticatedExcise;
