import { MAPPING } from "../mapping";

import { getReports } from "../../api/report";
import { ReportsPassAuth } from "../../Utils/report_auth";

/**
 * Don't call this directly
 * Use dataProvider
 */
export const DrugReportsProvider = {
  resource: MAPPING.DRUG_REPORTS,

  /**
   * @param {string} resource
   * @param {import("react-admin").ListParams} params
   * @returns {Promise<import("react-admin").GetListResult>}
   * */
  getList: async (resource, params) => {
    const password = await ReportsPassAuth.getPassword();
    const response = await getReports(password);

    if (response.error === "INVALID PASSWORD") {
      ReportsPassAuth.resetPassword();
      window.location.reload(false);
      throw Error("Invalid Password");
    }

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },
};
