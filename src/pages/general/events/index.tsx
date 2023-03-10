import icon from "@mui/icons-material/Event";
import MAPPING from "provider/mapping";
import EventList from "./List";
import EventShow from "./Show";
import EventEdit from "./Edit";
import EventCreate from "./Create";
import { ResourceProps } from "react-admin";

const Events: ResourceProps = {
  name: MAPPING.GENERAL.EVENTS,
  icon,
  options: { label: "Events" },
  list: EventList,
  show: EventShow,
  edit: EventEdit,
  create: EventCreate,
};

export default Events;
