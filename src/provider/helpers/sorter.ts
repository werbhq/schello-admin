import { GetListParams, RaRecord } from "react-admin";

/**
 * Sorter for getList data
 */
export function sorter<T extends RaRecord>(params: GetListParams, data: T[]) {
  const sort = params?.sort;
  const filters = params?.filter as { [key: string]: any };

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
        } else if (typeof a.id === "string" && typeof b.id === "string") {
          return a.id.localeCompare(b.id as string);
        }

        return true;
      });
    }
  }

  if (filters && Object.entries(filters).length) {
    Object.entries(filters).forEach(([field, value]) => {
      if (typeof value === "object") {
        Object.entries(value).forEach(([field_2, value_2]) => {
          data = data.filter((e) => {
            if (
              typeof e[field][field_2] === "string" ||
              typeof e[field][field_2] === "number"
            ) {
              const val = value_2 as string | number;
              return `${e[field][field_2]}`
                .toUpperCase()
                .includes(val.toString().toUpperCase());
            } else if (Array.isArray(e[field][field_2])) {
              return e[field][field_2].includes(value_2);
            } else if (typeof e[field][field_2] === "boolean") {
              return e[field][field_2] === value_2;
            }
            return true;
          });
        });
      } else {
        data = data.filter((e) => {
          if (typeof e[field] === "string" || typeof e[field] === "number") {
            return `${e[field]}`.toUpperCase().includes(value.toUpperCase());
          } else if (Array.isArray(e[field])) {
            return e[field].includes(value);
          } else if (typeof e[field] === "boolean") {
            return e[field] === value;
          } else if (e[field] === null) {
            return false;
          }
          return true;
        });
      }
    });
  }

  return data;
}
