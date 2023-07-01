import { EXCISE_TENANT } from "config";
import { usePermissions } from "react-admin";

const useIsExcise = () => {
  const { isLoading, permissions } = usePermissions();
  if (isLoading) return null;
  return permissions["tenant"] === EXCISE_TENANT;
};

export default useIsExcise;
