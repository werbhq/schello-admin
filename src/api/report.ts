import baseApi from ".";
import { Report } from "types/Report";
import ReportsPassAuth from "utils/report_auth";

class ReportAPI {
  static AUTH = async () => {
    if (!ReportsPassAuth.isPasswordInLocalStore()) return false;
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report`, passwordHeader ?? {});
    if (data === "AUTHORIZED") return true;
    return false;
  };

  static getList = async () => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report/all`, passwordHeader ?? {});
    if (data.error) return data;
    return data?.map((e: Report) => ({
      ...e,
      category: e.category.split("_").join(" "),
    }));
  };

  static getOne = async (id: string) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.get(`/report/${id}`, passwordHeader ?? {});
    if (data.error) return data;
    return data;
  };

  static getMany = async (ids: string[]) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.post(
      `/report/ids`,
      { ids },
      passwordHeader ?? {}
    );
    if (data.error) return data;
    return data;
  };

  static update = async (
    id: string,
    status: Report["status"],
    studentConfirmed?: string
  ) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.patch(
      `/report`,
      { ids: [id], status, studentConfirmed },
      passwordHeader ?? {}
    );
    if (data.error) return data;
    return data;
  };

  static updateMany = async (ids: string[], status: Report["status"]) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    const { data } = await baseApi.patch(
      `/report`,
      { ids, status },
      passwordHeader ?? {}
    );
    if (data.error) return data;
    return data;
  };

  static MIGRATE = async (oldPassword: string, newPassword: string) => {
    const passwordHeader = await ReportsPassAuth.getHeaders();
    try {
      await baseApi.post(
        `/report/migrate`,
        {
          newPassword,
          password: oldPassword,
        },
        passwordHeader ?? {}
      );
      await ReportsPassAuth.setPassword(newPassword);
      return { success: true, message: "Migration is done" };
    } catch (error: any) {
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

export default ReportAPI;
