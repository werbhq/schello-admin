import { Menu } from "react-admin";
import { MAPPING } from "../../provider/mapping";
import SubMenu from "./SubMenu";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import GroupsIcon from "@mui/icons-material/Groups";
import PublicIcon from "@mui/icons-material/Public";

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
      <Menu.Item
        to="/crime-mapping"
        primaryText="Crime Mapping"
        leftIcon={<LocalPoliceIcon />}
      />
    </Menu>
  );
};
