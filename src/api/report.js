import { baseApi } from ".";
import { ReportsPassAuth } from "../utils/report_auth";

export class ReportAPI {
  static AUTH = async () => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report`, passwordHeader);
    if (data === "AUTHORIZED") return true;
    return false;
  };

  static GET_ALL = async () => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report/all`, passwordHeader);
    if (data.error) return data;
    return data.map((e) => ({
      ...e,
      category: e.category.split("_").join(" "),
    }));
  };

  static GET_ID = async (id) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report/${id}`, passwordHeader);
    if (data.error) return data;
    return data;
  };

  static GET_IDS = async (ids) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.post(`/report/ids`, { ids }, passwordHeader);
    if (data.error) return data;
    return data;
  };

  static MIGRATE = async (oldPassword, newPassword) => {
    try {
      await baseApi.post(`/report/migrate`, {
        newPassword,
        password: oldPassword,
      });
      await ReportsPassAuth.setPassword(newPassword);
      return { success: true, message: "Migration is done" };
    } catch (error) {
      return {
        success: false,
        message:
          error.response.data === "UNAUTHORIZED"
            ? "Incorrect old password given"
            : error.response.statusText,
      };
    }
  };
}
