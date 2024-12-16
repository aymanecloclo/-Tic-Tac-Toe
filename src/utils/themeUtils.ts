export const getStoredTheme = (): string => {
  return localStorage.getItem('theme') || 'light';
};

export const storeTheme = (theme: string): void => {
  localStorage.setItem('theme', theme);
};