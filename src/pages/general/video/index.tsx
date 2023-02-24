import icon from "@mui/icons-material/VideoCall";
import { MAPPING } from "../../../provider/mapping";
import VideoEdit from "./Edit";
import VideoList from "./List";
import VideoShow from "./Show";
import VideoCreate from "./Create";
import { ResourceProps } from "react-admin";

const CommunityVideo: ResourceProps = {
  name: MAPPING.GENERAL.VIDEO,
  icon,
  options: { label: "Video" },
  list: VideoList,
  show: VideoShow,
  edit: VideoEdit,
  create: VideoCreate,
};

export default CommunityVideo;
