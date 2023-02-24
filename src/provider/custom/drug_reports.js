import { MAPPING } from "../mapping";

import { ReportAPI } from "../../api/report";
import { ReportsPassAuth } from "../../utils/report_auth";

const handlePass = (res) => {
  if (res.error === "INVALID PASSWORD") {
    ReportsPassAuth.resetPassword();
    window.location.reload(false);
    throw Error("Invalid Password");
  } else if (res.error) {
    throw Error(res.error);
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
    const response = await ReportAPI.getList();
    handlePass(response);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },

  getOne: async (resource, params) => {
    const response = await ReportAPI.getOne(params.id);
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
    const response = await ReportAPI.getMany(params.ids);
    handlePass(response);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },

  /**
   * @param {string} resource
   * @param {import("react-admin").UpdateParams} params
   * @returns {Promise<import("react-admin").UpdateResult>}
   * */
  update: async (resource, params) => {
    await ReportAPI.update(params.data.id, params.data.status);

    return {
      data: params.data,
      status: 200,
    };
  },

  /**
   * @param {string} resource
   * @param {import("react-admin").UpdateManyParams} params
   * @returns {Promise<import("react-admin").UpdateResult>}
   * */
  updateMany: async (resource, params) => {
    await ReportAPI.updateMany(params.ids, params.data.status);

    return {
      data: params.ids,
      status: 200,
    };
  },
};
