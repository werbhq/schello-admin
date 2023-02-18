import { baseApi } from ".";

export class ReportAPI {
  static GET_ALL = async (password) => {
    const { data } = await baseApi.get(`/report/all?password=${password}`);
    if (data.error) return data;
    return data.map((e) => ({
      ...e,
      category: e.category.split("_").join(" "),
    }));
  };

  static GET_ID = async (password, id) => {
    const { data } = await baseApi.get(`/report/${id}?password=${password}`);
    if (data.error) return data;
    return data;
  };
}
