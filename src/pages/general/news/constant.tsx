import { convertSingleValueListToSelectList } from "utils/helpers";

export const newsList = ["EXTERNAL", "INTERNAL"].map(
  convertSingleValueListToSelectList
);
