import { MAPPING } from "../mapping";

import { ReportAPI } from "../../api/report";
import { ReportsPassAuth } from "../../Utils/report_auth";

const handlePass = (res) => {
  if (res.error === "INVALID PASSWORD") {
    ReportsPassAuth.resetPassword();
    window.location.reload(false);
    throw Error("Invalid Password");
  }
};

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
    const response = await ReportAPI.GET_ALL();
    handlePass(response);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },

  getOne: async (resource, params) => {
    const response = await ReportAPI.GET_ID(params.id);
    handlePass(response);

    return {
      data: response,
      status: 200,
    };
  },

  /**
   * @param {string} resource
   * @param {import("react-admin").GetManyParams} params
   * @returns {Promise<import("react-admin").GetManyResult>}
   * */
  getMany: async (resource, params) => {
    const response = await ReportAPI.GET_IDS(params.ids);
    handlePass(response);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },
};
