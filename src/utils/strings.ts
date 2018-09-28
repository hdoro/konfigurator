export const removeWhitespace = (str: string) => {
  return str.replace(/\s/g, '');
};

export const formatFontName = (font: string) => {
  return font.replace(/\s/g, '+');
};

export const cutDecimals = (num: number, decimals: number = 2) => {
  return +num.toFixed(decimals);
};
