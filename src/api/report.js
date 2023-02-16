import { baseApi } from ".";

export const getReports = async (password) => {
  const { data } = await baseApi.get(`/report/all?password=${password}`);
  return data.map((e) => ({ ...e, category: e.category.split("_").join(" ") }));
};
