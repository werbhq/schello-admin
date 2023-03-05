import {
  Admin,
  defaultTheme,
  Resource,
  CustomRoutes,
  RaThemeOptions,
} from "react-admin";
import red from "@mui/material/colors/red";
import { Route } from "react-router-dom";

import DashBoard from "./pages/dashboard/Dashboard";
import { authProvider, dataProvider } from "./provider/firebase";
import { CustomLayout } from "./components/ui/Layout";
import DrugReport from "./pages/drugReports";
import Events from "./pages/general/events";
import ReportMapping from "./pages/reportMapping";
import CommunityVideo from "./pages/community/video";
import CommunityArticle from "./pages/community/article";
import GeneralNews from "./pages/general/news";
import GeneralVideo from "./pages/general/video";
import Students from "./pages/students";
import ChangePassword from "./pages/changePassword";
import { MAPPING } from "./provider/mapping";
import { customQueryClient } from "./provider/queryClient";
import WantedList from "./pages/wantedList";

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
    <Resource {...DrugReport} />
    <Resource {...Events} />
    <Resource {...CommunityArticle} />
    <Resource {...CommunityVideo} />
    <Resource {...GeneralNews} />
    <Resource {...GeneralVideo} />
    <Resource {...Students} />
    <Resource {...WantedList} />

    <CustomRoutes>
      <Route path={MAPPING.REPORT_MAP} element={<ReportMapping />} />
      <Route path={MAPPING.PASSWORD} element={<ChangePassword />} />
    </CustomRoutes>
  </Admin>
);

export default App;
