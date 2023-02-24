import { ReactNode, useState } from "react";
import {
  List,
  MenuItem,
  ListItemIcon,
  Typography,
  Collapse,
  Tooltip,
  Stack,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useTranslate, useSidebarState } from "react-admin";

const SubMenu = (props: {
  name: string;
  icon: ReactNode;
  children: ReactNode;
  dense?: boolean;
}) => {
  const [isOpen, setOpen] = useState(false);
  const { name, icon, children, dense } = props;
  const translate = useTranslate();
  const [sidebarIsOpen] = useSidebarState();

  const header = (
    <MenuItem
      dense={dense ?? false}
      onClick={() => setOpen(!isOpen)}
      style={{ justifyContent: "space-between" }}
    >
      <Stack direction="row" spacing={0.5}>
        <ListItemIcon sx={{ minWidth: 5 }}>{icon}</ListItemIcon>
        <Typography variant="inherit" color="textSecondary">
          {translate(name)}
        </Typography>
      </Stack>
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </MenuItem>
  );

  return (
    <div>
      {sidebarIsOpen || isOpen ? (
        header
      ) : (
        <Tooltip title={translate(name)} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List
          dense={dense}
          component="div"
          disablePadding
          sx={{
            "& a": {
              transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
              paddingLeft: sidebarIsOpen ? 4 : 2,
            },
          }}
        >
          {children}
        </List>
      </Collapse>
    </div>
  );
};

export default SubMenu;
