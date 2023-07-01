import { DataProviderCustom } from "types/DataProvider";
import { DrugReportsProvider } from "./custom/drug_reports";

// ADD YOUR PROVIDERS HERE
const CustomProviders: DataProviderCustom[] = [DrugReportsProvider];

export default CustomProviders;
