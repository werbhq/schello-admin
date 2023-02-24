import { convertSingleValueListToSelectList } from "../../utils/helpers";

export const category_type = [
  "USAGE_SUSPECTED",
  "USAGE_CONFIRMED",
  "TRADING_SUSPECTED",
  "TRADING_CONFIRMED",
].map((e) => ({ id: e, name: e.replace("_", " ") }));

export const status_type = ["NEW", "IN-PROGRESS", "DONE", "SPAM"].map(
  convertSingleValueListToSelectList
);

export const status_color = {
  NEW: "info",
  "IN-PROGRESS": "warning",
  DONE: "success",
  SPAM: "red",
};
