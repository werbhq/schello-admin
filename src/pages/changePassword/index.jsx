import { useEffect, useState } from "react";
import { Card, CardHeader, Stack, TextField } from "@mui/material";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { useNotify } from "react-admin";
import { ReportAPI } from "../../api/report";
import DialogPrompt from "./components/DialogPrompt";
import { LoadingButton } from "@mui/lab";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const notify = useNotify();
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((oldPassword === "") | (newPassword === "")) {
      return notify("Password cannot be empty", { type: "error" });
    }
    setOpenDialog(true);
  };

  const runMigraton = async () => {
    setLoading(true);
    ReportAPI.MIGRATE(oldPassword, newPassword)
      .then((e) => {
        notify(e.message, { type: e.success ? "success" : "error" });
      })
      .catch((e) => {
        notify(e.message, { type: "error" });
      });
    setLoading(false);
    setSubmit(false);
  };

  useEffect(() => {
    if (submit === true) runMigraton();
    setOpenDialog(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);

  return (
    <AuthenticatedExcise>
      <Card sx={{ height: "100%" }}>
        <CardHeader title="Change reports decryption key" />
        <form onSubmit={handleSubmit}>
          <Stack sx={{ maxWidth: "20vw", margin: "15px" }} spacing={2}>
            <TextField
              label="Old Password"
              variant="outlined"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
              label="New Password"
              variant="outlined"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <LoadingButton
              type="submit"
              loading={isLoading}
              variant="contained"
              sx={{ width: "8rem", marginTop: "20px" }}
            >
              Submit
            </LoadingButton>
          </Stack>
        </form>
        {openDialog && (
          <DialogPrompt setAnswer={setSubmit} setOpen={setOpenDialog} />
        )}
      </Card>
    </AuthenticatedExcise>
  );
};

export default ChangePassword;
