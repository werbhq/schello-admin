import icon from "@mui/icons-material/Book";
import { MAPPING } from "../../provider/mapping";
import { EditGuesser, ListGuesser, ShowGuesser } from "ra-ui-materialui";

const CommunityArticle = {
  name: MAPPING.COMMUNITY.ARTICLE,
  icon,
  options: { label: "Article" },
  list: ListGuesser,
  show: ShowGuesser,
  edit: EditGuesser,
};

export default CommunityArticle;
