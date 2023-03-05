import { MAPPING } from "../mapping";

import { ReportAPI } from "../../api/report";
import { ReportsPassAuth } from "../../utils/report_auth";
import { DataProviderCustom } from "../../types/DataProvider";
import { sorter } from "../helpers/sorter";

const handlePass = (res: { error: string }) => {
  if (res.error === "INVALID PASSWORD") {
    ReportsPassAuth.resetPassword();
    window.location.reload();
    throw Error("Invalid Password");
  } else if (res.error) {
    throw Error(res.error);
  }
};

/**
 * Don't call this directly
 * Use dataProvider
 */
export const DrugReportsProvider: DataProviderCustom = {
  resource: MAPPING.DRUG_REPORTS,

  getList: async (resource, params) => {
    const response = await ReportAPI.getList();
    handlePass(response);

    return {
      data: sorter(params, response) ?? [],
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

  getMany: async (resource, params) => {
    const response = await ReportAPI.getMany(params.ids as string[]);
    handlePass(response);

    return {
      data: response ?? [],
      total: response?.length ?? 0,
      status: 200,
    };
  },

  update: async (resource, params) => {
    await ReportAPI.update(params.data.id, params.data.status);

    return {
      data: params.data,
      status: 200,
    };
  },

  updateMany: async (resource, params) => {
    await ReportAPI.updateMany(params.ids as string[], params.data.status);

    return {
      data: params.ids,
      status: 200,
    };
  },
};
