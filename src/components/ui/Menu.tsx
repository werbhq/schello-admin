import { Menu } from "react-admin";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import PasswordIcon from "@mui/icons-material/Password";
import MapIcon from "@mui/icons-material/Map";
import SchoolIcon from "@mui/icons-material/School";
import MAPPING from "provider/mapping";
import SubMenu from "./SubMenu";
import useIsExcise from "hooks/useIsExcise";

const CustomMenu = () => {
  const isExcise = useIsExcise();
  return (
    <Menu>
      <Menu.DashboardItem />
      {!isExcise && (
        <Menu.Item
          to={MAPPING.ROUTER_PATH.ATTENDO}
          leftIcon={<SchoolIcon />}
          primaryText="Attendo"
        />
      )}

      <Menu.ResourceItem name={MAPPING.DRUG_REPORTS} />

      {isExcise && (
        <SubMenu name="General" icon={<PublicIcon />}>
          <Menu.ResourceItem name={MAPPING.GENERAL.EVENTS} />
          <Menu.ResourceItem name={MAPPING.GENERAL.NEWS} />
          <Menu.ResourceItem name={MAPPING.GENERAL.GOOGLE_NEWS} />
          <Menu.ResourceItem name={MAPPING.GENERAL.VIDEO} />
        </SubMenu>
      )}
      {!isExcise && (
        <SubMenu name="Community" icon={<GroupsIcon />}>
          <Menu.ResourceItem name={MAPPING.COMMUNITY.ARTICLE} />
          <Menu.ResourceItem name={MAPPING.COMMUNITY.VIDEO} />
        </SubMenu>
      )}
      <SubMenu name="Crime Statistics" icon={<LocalPoliceIcon />}>
        <Menu.ResourceItem name={MAPPING.STUDENTS} />
      </SubMenu>
      <SubMenu name="Crime Mapping" icon={<MapIcon />}>
        <Menu.Item
          to={MAPPING.ROUTER_PATH.REPORT_MAP}
          leftIcon={<SchoolIcon />}
          primaryText="Report"
        />
      </SubMenu>
      <Menu.Item
        to={MAPPING.ROUTER_PATH.PASSWORD}
        primaryText="Change Password"
        leftIcon={<PasswordIcon />}
      />
    </Menu>
  );
};

export default CustomMenu;
