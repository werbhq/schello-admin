import { baseApi } from ".";

export const getReports = async (password) => {
  const { data } = await baseApi.get(`/report/all?password=${password}`);
  if (data.error) return data;
  return data.map((e) => ({ ...e, category: e.category.split("_").join(" ") }));
};
