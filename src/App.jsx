import * as React from "react";

import { Admin, defaultTheme, Resource, CustomRoutes } from "react-admin";
import red from "@mui/material/colors/red";
import { Route } from "react-router-dom";

// TODO: Remove attendo dependencies
// import Classroom from "./pages/classroom/Index";
// import Subject from "./pages/subjects/Index";
// import Courses from "./pages/courses/index";
// import AuthTeachers from "./pages/authTeachers/Index";
import DashBoard from "./pages/dashboard/Dashboard";
import { authProvider, dataProvider } from "./provider/firebase";
import { CustomLayout } from "./components/ui/Layout";
import DrugReport from "./pages/drugReports";
import Events from "./pages/general/events";
import CrimeMapping from "./pages/crimeMapping";
import CommunityVideo from "./pages/community/video";
import CommunityArticle from "./pages/community/article";
import GeneralNews from "./pages/general/news";
import GeneralVideo from "./pages/general/video";

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
    dashboard={DashBoard}
    layout={CustomLayout}
  >
    {/* <Resource {...Courses} />
    <Resource {...Subject} />
    <Resource {...Classroom} />
    <Resource {...AuthTeachers} /> */}
    <Resource {...DrugReport} />
    <Resource {...Events} />
    <Resource {...CommunityArticle} />
    <Resource {...CommunityVideo} />
    <Resource {...GeneralNews} />
    <Resource {...GeneralVideo} />

    <CustomRoutes>
      <Route path="/crime-mapping" element={<CrimeMapping />} />
    </CustomRoutes>
  </Admin>
);

export default App;
