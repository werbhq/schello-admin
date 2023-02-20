import { baseApi } from ".";
import { ReportsPassAuth } from "../Utils/report_auth";

export class ReportAPI {
  static AUTH = async () => {
    const password = await ReportsPassAuth.getPassword();
    const { data } = await baseApi.get(`/report/auth?password=${password}`);
    if (data === "AUTHORIZED") return true;
    return false;
  };

  static GET_ALL = async () => {
    const password = await ReportsPassAuth.getPassword();
    const { data } = await baseApi.get(`/report/all?password=${password}`);
    if (data.error) return data;
    return data.map((e) => ({
      ...e,
      category: e.category.split("_").join(" "),
    }));
  };

  static GET_ID = async (id) => {
    const password = await ReportsPassAuth.getPassword();
    const { data } = await baseApi.get(`/report/${id}?password=${password}`);
    if (data.error) return data;
    return data;
  };

  static GET_IDS = async (ids) => {
    const password = await ReportsPassAuth.getPassword();
    const { data } = await baseApi.post(`/report/ids`, { ids, password });
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
