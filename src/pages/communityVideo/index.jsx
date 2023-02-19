import icon from "@mui/icons-material/VideoCall";
import { MAPPING } from "../../provider/mapping";
import { ListGuesser, ShowGuesser, EditGuesser } from "ra-ui-materialui";
import VideoEdit from "./Edit";
import VideoList from "./List";
import VideoShow from "./Show";
import VideoCreate from "./Create";

const CommunityVideo = {
  name: MAPPING.COMMUNITY.VIDEO,
  icon,
  options: { label: "Video" },
  list: VideoList,
  show: VideoShow,
  edit: VideoEdit,
  create: VideoCreate,
};

export default CommunityVideo;
