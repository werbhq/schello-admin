import icon from "@mui/icons-material/VideoCall";
import { MAPPING } from "../../../provider/mapping";
import VideoEdit from "./../../general/video/Edit";
import VideoList from "./../../general/video/List";
import VideoShow from "./../../general/video/Show";
import VideoCreate from "./../../general/video/Create";

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