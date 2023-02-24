import { GetListParams } from "react-admin";

export const autoCapitalize = (value: string) => value && value.toUpperCase();

export const convertSingleValueListToSelectList = (value: string) => {
  return { id: value, name: value.toUpperCase() };
};

/**
 * Sorter for getList data
 */
export const sorter = (params: GetListParams, data: any[]) => {
  const { sort, filter } = params;

  if (filter && filter["subjectName"]) {
    console.log(data);
  }

  if (sort) {
    const field = sort.field;

    if (Array.isArray(data)) {
      data = data.sort((a, b) => {
        if (typeof a[field] === "string") {
          if (sort.order === "DESC") return b[field]?.localeCompare(a[field]);
          return a[field]?.localeCompare(b[field]);
        } else if (typeof a[field] === "number") {
          if (sort.order === "DESC") return b[field] - a[field];
          return a[field] - b[field];
        }
        return a - b;
      });
    }
  }

  if (filter && Object.entries(filter).length) {
    const filters: [string, string][] = Object.entries(filter);
    filters.forEach(([e_field, value]) => {
      data = data.filter((e) => {
        if (typeof e[e_field] === "string" || typeof e[e_field] === "number") {
          return `${e[e_field]}`.toUpperCase().includes(value.toUpperCase());
        } else if (Array.isArray(e[e_field])) {
          return e[e_field].includes(value);
        } else {
          return true;
        }
      });
    });
  }

  return data;
};
