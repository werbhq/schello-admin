import { useQuery } from "react-query";
import { useLogout, useNotify, useRedirect } from "react-admin";
import ReportsPassAuth from "utils/report_auth";

const useDecryptionAuth = () => {
  const notify = useNotify();
  const redirect = useRedirect();
  const logout = useLogout();

  const response = useQuery(
    "auth-decryption-key",
    ReportsPassAuth.checkPassword,
    {
      staleTime: 1000 * 60 * 5, // Expire password after 5mins
      onError: (e: any) => {
        if (e.response.status === 401) return logout();
        notify(`A problem occurred checking access key: ${e.message}`, {
          type: "error",
        });
        redirect("/");
      },
      onSuccess(authorized) {
        if (!authorized && ReportsPassAuth.isPasswordInLocalStore())
          notify(`Decryption password is incorrect`, { type: "error" });
      },
    }
  );

  return {
    authorized: response.data,
    ...response,
  };
};

export default useDecryptionAuth;
