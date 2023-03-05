export const autoCapitalize = (value: string) => value && value.toUpperCase();

export const convertSingleValueListToSelectList = (value: string) => {
  return { id: value, name: value.toUpperCase() };
};
