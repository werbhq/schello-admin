import { MAPPING } from "../mapping";

import { getReports } from "../../api/report";

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
    const response = await getReports("mak@test", 5);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },
};
