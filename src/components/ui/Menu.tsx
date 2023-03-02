import { Menu } from "react-admin";
import { MAPPING } from "../../provider/mapping";
import SubMenu from "./SubMenu";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";
import PasswordIcon from "@mui/icons-material/Password";
import MapIcon from "@mui/icons-material/Map";

export const CustomMenu = () => {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.ResourceItem name={MAPPING.DRUG_REPORTS} />

      <SubMenu name="General" icon={<PublicIcon />}>
        <Menu.ResourceItem name={MAPPING.GENERAL.EVENTS} />
        <Menu.ResourceItem name={MAPPING.GENERAL.NEWS} />
        <Menu.ResourceItem name={MAPPING.GENERAL.VIDEO} />
      </SubMenu>
      <SubMenu name="Community" icon={<GroupsIcon />}>
        <Menu.ResourceItem name={MAPPING.COMMUNITY.ARTICLE} />
        <Menu.ResourceItem name={MAPPING.COMMUNITY.VIDEO} />
      </SubMenu>
      <SubMenu name="Crime Mapping" icon={<LocalPoliceIcon />}>
        <Menu.ResourceItem name={MAPPING.STUDENTS} />
        <Menu.Item
          to={MAPPING.CRIME_MAPPING}
          primaryText="Map"
          leftIcon={<MapIcon />}
        />
        <Menu.ResourceItem name={MAPPING.WANTED_LIST} />
      </SubMenu>
      <Menu.Item
        to={MAPPING.PASSWORD}
        primaryText="Change Password"
        leftIcon={<PasswordIcon />}
      />
    </Menu>
  );
};
