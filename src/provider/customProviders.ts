import { DataProviderCustom } from "types/DataProvider";
import { DrugReportsProvider } from "./custom/drug_reports";
import { WantedListProvider } from "./custom/wanted_list";

// ADD YOUR PROVIDERS HERE
const CustomProviders: DataProviderCustom[] = [
  DrugReportsProvider,
  WantedListProvider,
];

export default CustomProviders;
