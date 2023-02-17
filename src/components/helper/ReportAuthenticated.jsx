"../ReportPassword";
import { ReportsPassAuth } from "../../Utils/report_auth";
import ReportPassword from "../../pages/ReportPassword";

const AuthenticatedExcise = ({ children }) => {
  return ReportsPassAuth.checkPassword() ? children : <ReportPassword />;
};

export default AuthenticatedExcise;
