import icon from "@mui/icons-material/VideoCall";
import { MAPPING } from "../../provider/mapping";
import { ListGuesser, ShowGuesser, EditGuesser } from "ra-ui-materialui";

const CommunityVideo = {
  name: MAPPING.COMMUNITY.VIDEO,
  icon,
  options: { label: "Video" },
  list: ListGuesser,
  show: ShowGuesser,
  edit: EditGuesser,
};

export default CommunityVideo;
