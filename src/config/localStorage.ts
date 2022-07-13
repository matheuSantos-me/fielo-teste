const { stringify, parse } = JSON;

export const setStorage = (key: string, value: string) => {
  if (!window) return;
  window.localStorage.setItem(key, stringify(value));
};

export const getStorage = (key: string) => {
  if (!window) return;
  const value: any = window.localStorage.getItem(key);
  return parse(value);
};