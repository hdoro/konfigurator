// import typography from '../theme/typography';

// const fallBackFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial, sans-serif";

// const getFontFamilyString = (family?: string) => `${
//   family ? `${family}, ` : ''
// }${typography.fallbackFont || fallBackFamily}`

// export const themeBodyFontFamily = getFontFamilyString(typography.fontFamily);

// export const themeHeadingFontFamily = getFontFamilyString(typography.fontFamilyHeading);

// export function leading(top: number | string, right?: number | string, bottom?: number, left?: number) {
//   if (!right && right !== 0) {
//     if(typeof top === 'number') {
//       return `${top * typography.lineHeight}rem`
//     } else if (typeof top === 'string') {
//       return 'auto'
//     }
//   } else if (!bottom && bottom !== 0) {
//     let mgTop;
//     let mgRight;
//     if (typeof top === 'number') {
//       mgTop = `${top * typography.lineHeight}rem`;
//     } else if (typeof top === 'string') {
//       mgTop = 'auto';
//     }
//     if (typeof right === 'number') {
//       mgRight = `${right * typography.lineHeight}rem`;
//     } else if (typeof right === 'string') {
//       mgRight = 'auto';
//     }
//     return `${mgTop} ${mgRight}`
//   } else if(!left && left !== 0) {
//     if (typeof right === 'number' && typeof top === 'number') {
//       return `${top * typography.lineHeight}rem ${right * typography.lineHeight}rem ${bottom * typography.lineHeight}rem`
//     }
//   } else {
//     if (typeof right === 'number' && typeof top === 'number') {
//       return `${top * typography.lineHeight}rem ${right * typography.lineHeight}rem ${bottom * typography.lineHeight}rem ${left * typography.lineHeight}rem`
//     }
//   }
//   return '';
// }