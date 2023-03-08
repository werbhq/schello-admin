import icon from "@mui/icons-material/Book";
import MAPPING from "provider/mapping";
import ArticleCreate from "./Create";
import ArticleShow from "./Show";
import ArticleList from "./List";
import ArticleEdit from "./Edit";
import { ResourceProps } from "react-admin";

const CommunityArticle: ResourceProps = {
  name: MAPPING.COMMUNITY.ARTICLE,
  icon,
  options: { label: "Article" },
  list: ArticleList,
  show: ArticleShow,
  edit: ArticleEdit,
  create: ArticleCreate,
};

export default CommunityArticle;
