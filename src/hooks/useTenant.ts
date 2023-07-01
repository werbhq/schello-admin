import { usePermissions } from "react-admin";

const useTenant = () => {
  const { isLoading, permissions } = usePermissions();
  if (isLoading) return null;
  return permissions["tenant"];
};

export default useTenant;
