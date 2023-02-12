import * as React from "react";

import { Admin, defaultTheme, Resource } from "react-admin";
import red from "@mui/material/colors/red";

// TODO: Remove attendo dependencies
// import Classroom from "./pages/classroom/Index";
// import Subject from "./pages/subjects/Index";
// import Courses from "./pages/courses/index";
// import AuthTeachers from "./pages/authTeachers/Index";
import DashBoard from "./pages/dashboard/Dashboard";
import { authProvider, dataProvider } from "./provider/firebase";
import { CustomLayout } from "./components/ui/Layout";
import DrugReport from "./pages/drugReports";
import Events from "./pages/events";

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
  </Admin>
);

export default App;
