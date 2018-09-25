// hexToRgb function credits to @misund
// https://github.com/misund/hex-to-rgba

const removeHash = (hex: string) => (hex.charAt(0) === '#' ? hex.slice(1) : hex);

const parseHex = (nakedHex: string) => {
  const isShort = (
    3 === nakedHex.length
    || 4 === nakedHex.length
  );

  const twoDigitHexR = isShort ? `${nakedHex.slice(0, 1)}${nakedHex.slice(0, 1)}` : nakedHex.slice(0, 2);
  const twoDigitHexG = isShort ? `${nakedHex.slice(1, 2)}${nakedHex.slice(1, 2)}` : nakedHex.slice(2, 4);
  const twoDigitHexB = isShort ? `${nakedHex.slice(2, 3)}${nakedHex.slice(2, 3)}` : nakedHex.slice(4, 6);
  const twoDigitHexA = ((isShort ? `${nakedHex.slice(3, 4)}${nakedHex.slice(3, 4)}` : nakedHex.slice(6, 8)) || 'ff');

  // const numericA = +((parseInt(a, 16) / 255).toFixed(2));

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
    a: twoDigitHexA,
  };
};

const hexToDecimal = (hex: string) => parseInt(hex, 16);

const hexesToDecimals = ({ r, g, b, a }: any) => ({
  r: hexToDecimal(r),
  g: hexToDecimal(g),
  b: hexToDecimal(b),
  a: +((hexToDecimal(a) / 255).toFixed(2)),
});

const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);

const formatRgb = (decimalObject: any, parameterA: any) => {
  const { r, g, b, a: parsedA } = decimalObject;
  const a = isNumeric(parameterA) ? parameterA : parsedA;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const hexToRgb = (hex: string, a?: number) => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {

    const hashlessHex = removeHash(hex);
    const hexObject = parseHex(hashlessHex);
    const decimalObject = hexesToDecimals(hexObject);

    return formatRgb(decimalObject, a);

  } else { throw new Error('Bad Hex'); }
};