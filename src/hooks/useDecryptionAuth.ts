import { useQuery } from "react-query";
import { ReportsPassAuth } from "../utils/report_auth";
import { useNotify, useRedirect } from "react-admin";

export const useDecryptionAuth = () => {
  const notify = useNotify();
  const redirect = useRedirect();

  const response = useQuery(
    "auth-decryption-key",
    ReportsPassAuth.checkPassword,
    {
      staleTime: 1000 * 60 * 5, // Expire password after 5mins
      onError: (e: any) => {
        notify(`A problem occurred checking access key: ${e.message}`, {
          type: "error",
        });
        redirect("/");
      },
      onSuccess(authorized) {
        if (!authorized)
          notify(`Decryption password is incorrect`, { type: "error" });
      },
    }
  );

  return {
    authorized: response.data,
    ...response,
  };
};
