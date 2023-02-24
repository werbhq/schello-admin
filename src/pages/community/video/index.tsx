import { MAPPING } from "../../../provider/mapping";
import GeneralVideoIndex from "./../../general/video";
import { ResourceProps } from "react-admin";

const CommunityVideo: ResourceProps = {
  ...GeneralVideoIndex,
  name: MAPPING.COMMUNITY.VIDEO,
};

export default CommunityVideo;
