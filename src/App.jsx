import * as React from "react";

import { Admin, defaultTheme, Resource, CustomRoutes } from "react-admin";
import red from "@mui/material/colors/red";
import { Route } from "react-router-dom";

import DashBoard from "./pages/dashboard/Dashboard";
import { authProvider, dataProvider } from "./provider/firebase";
import { CustomLayout } from "./components/ui/Layout";
import DrugReport from "./pages/drugReports";
import Events from "./pages/general/events";
import CrimeMapping from "./pages/reportMapping";
import CommunityVideo from "./pages/community/video";
import CommunityArticle from "./pages/community/article";
import GeneralNews from "./pages/general/news";
import GeneralVideo from "./pages/general/video";
import Students from "./pages/students";
import ChangePassword from "./pages/changePassword";
import { MAPPING } from "./provider/mapping";
import { customQueryClient } from "./provider/queryClient";

const myTheme = {
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

    <CustomRoutes>
      <Route path={MAPPING.CRIME_MAPPING} element={<CrimeMapping />} />
      <Route path={MAPPING.PASSWORD} element={<ChangePassword />} />
    </CustomRoutes>
  </Admin>
);

export default App;
