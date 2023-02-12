import icon from "@mui/icons-material/Article";
import { MAPPING } from "../../provider/mapping";
import { ListGuesser, ShowGuesser } from "react-admin";

const Events = {
  name: MAPPING.EVENTS,
  icon,
  options: { label: "Events" },
  list: ListGuesser,
  show: ShowGuesser,
};

export default Events;
