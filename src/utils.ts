export const dateToRFC5545 = (date: Date): string => {
  return date.toISOString().replace(/-|:|\.\d+/g, '');
};
