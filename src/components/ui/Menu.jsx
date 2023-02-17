// in src/MyMenu.js
import { Menu } from "react-admin";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { MAPPING } from "../../provider/mapping";

export const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name={MAPPING.DRUG_REPORTS} />
    <Menu.ResourceItem name={MAPPING.EVENTS} />
    <Menu.Item
      to="/crime-mapping"
      primaryText="Crime Mapping"
      leftIcon={<LocalPoliceIcon />}
    />
  </Menu>
);
