import {
  Admin,
  defaultTheme,
  Resource,
  CustomRoutes,
  RaThemeOptions,
} from "react-admin";
import red from "@mui/material/colors/red";
import { Route } from "react-router-dom";
import { authProvider, dataProvider } from "provider/firebase";
import { CustomLayout } from "components/ui/Layout";
import MAPPING from "provider/mapping";
import { customQueryClient } from "provider/queryClient";

import DashBoard from "pages/dashboard/Dashboard";
import DrugReport from "pages/drugReports";
import Events from "pages/general/events";
import ReportMapping from "pages/map/pages/report";
import CommunityVideo from "pages/community/video";
import CommunityArticle from "pages/community/article";
import GeneralNews from "pages/general/news";
import GoogleNews from "pages/general/google-news";
import GeneralVideo from "pages/general/video";
import Students from "pages/students";
import ChangePassword from "pages/changePassword";
import { EXCISE_TENANT } from "config";

const myTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    primary: {
      main: "#179F97",
    },
    secondary: {
      main: "#F1C043",
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
};

const App = () => (
  <Admin
    title="Schello Admin"
    theme={myTheme}
    dataProvider={dataProvider}
    authProvider={authProvider}
    queryClient={customQueryClient}
    dashboard={DashBoard}
    layout={CustomLayout}
  >
    {({ tenant }) => {
      const isExcise = tenant === EXCISE_TENANT;
      return (
        <>
          <Resource
            {...DrugReport}
            edit={isExcise ? undefined : DrugReport.edit}
          />

          {!isExcise && <Resource {...CommunityArticle} />}
          {!isExcise && <Resource {...CommunityVideo} />}

          {isExcise && <Resource {...Events} />}
          {isExcise && <Resource {...GeneralNews} />}
          {isExcise && <Resource {...GoogleNews} />}
          {isExcise && <Resource {...GeneralVideo} />}

          <Resource {...Students} />
          <CustomRoutes>
            <Route
              path={MAPPING.ROUTER_PATH.REPORT_MAP}
              element={<ReportMapping />}
            />
            <Route
              path={MAPPING.ROUTER_PATH.PASSWORD}
              element={<ChangePassword />}
            />
          </CustomRoutes>
        </>
      );
    }}
  </Admin>
);

export default App;
