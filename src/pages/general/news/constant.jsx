import { convertSingleValueListToSelectList } from "../../../Utils/helpers";

export const news_type = ["EXTERNAL", "INTERNAL"].map(
  convertSingleValueListToSelectList
);
