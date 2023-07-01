import { ResourceProps } from "react-admin";
import MAPPING from "provider/mapping";
import GeneralVideoIndex from "pages/general/video";

const CommunityVideo: ResourceProps = {
  ...GeneralVideoIndex,
  create: undefined,
  name: MAPPING.COMMUNITY.VIDEO,
};

export default CommunityVideo;
