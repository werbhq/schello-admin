import { Report } from "types/Report";
import { convertSingleValueListToSelectList } from "utils/helpers";

export const CATEGORY_TYPE = [
  "USAGE_SUSPECTED",
  "USAGE_CONFIRMED",
  "TRADING_SUSPECTED",
  "TRADING_CONFIRMED",
].map((e) => ({ id: e, name: e.replace("_", " ") }));

export const REPORT_STATUS = {
  DONE: "DONE",
  INPROGRESS: "IN-PROGRESS",
  NEW: "NEW",
  SPAM: "SPAM",
  ESCALATED: "ESCALATED",
};

export const STATUS_TYPE = [
  "NEW",
  "IN-PROGRESS",
  "DONE",
  "SPAM",
  "ESCALATED",
].map(convertSingleValueListToSelectList);

export const STATUS_COLOR = new Map<
  Report["status"],
  "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
>([
  ["NEW", "info"],
  ["IN-PROGRESS", "warning"],
  ["DONE", "success"],
  ["SPAM", "error"],
  ["ESCALATED", "error"],
]);
