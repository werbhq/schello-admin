import { Layout } from "react-admin";
import { ReactQueryDevtools } from "react-query/devtools";
import CustomMenu from "./Menu";

export const CustomLayout = (props: any) => {
  return (
    <>
      <Layout {...props} menu={CustomMenu} />
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </>
  );
};
