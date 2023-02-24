import { convertSingleValueListToSelectList } from "../../../utils/helpers";

export const news_type = ["EXTERNAL", "INTERNAL"].map(
  convertSingleValueListToSelectList
);
