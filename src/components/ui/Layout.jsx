// in src/MyLayout.js
import * as React from "react";
import { Layout } from "react-admin";

import { ReactQueryDevtools } from "react-query/devtools";
import { CustomMenu } from "./Menu";

export const CustomLayout = (props) => {
  return (
    <>
      <Layout {...props} menu={CustomMenu} />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </>
  );
};
