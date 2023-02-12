import { baseApi } from ".";

export const getReports = async (password, limit) => {
  const { data } = await baseApi.get(
    `/report/all?limitLength=${limit}&password=${password}`
  );

  return data.map((e) => ({ ...e, category: e.category.split("_").join(" ") }));
};
