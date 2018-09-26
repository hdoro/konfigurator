import {
  defaultHeadingMgBottom,
  defaultHeadingMgTop,
  getHeadingFontSize,
} from '../styles/userTheme';
import {
  TDisplayHeadingPropertyValue,
  TReturnHeadingPropertyValue,
  TReturnBodyPropertyValue,
  TDisplayBodyPropertyValue,
} from './types';

// Functions that return proper theme values to inputs in the editors

export const returnBodyLineHeight: TReturnBodyPropertyValue = ({ body }) =>
  body.lineHeight;

export const returnBodyLineHeightLg: TReturnBodyPropertyValue = ({ body }) =>
  body.lineHeightLg ? body.lineHeightLg : 0;

export const returnBodyMaxWidth: TReturnBodyPropertyValue = ({ body }) =>
  body.maxWidth;

export const returnBodyMargin: TReturnBodyPropertyValue = ({ body }) =>
  body.margin;

export const returnHeadingSize: TReturnHeadingPropertyValue = h =>
  h.fontSize || 0;

export const returnHeadingLineHeight: TReturnHeadingPropertyValue = h =>
  h.lineHeight || 0;

export const returnHeadingMarginTop: TReturnHeadingPropertyValue = (
  h,
  { i, theme }
) => {
  if ((!i && i !== 0) || !theme) {
    return 0;
  }
  const value = h.marginTop
    ? h.marginTop
    : (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop;

  return h.marginTop
    ? h.marginTop
    : (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop;
};

export const returnHeadingMarginBottom: TReturnHeadingPropertyValue = (
  h,
  { theme, propertyName }
) => {
  if (!theme || !propertyName) {
    return 0;
  }

  return (
    h.marginBottom ||
    (propertyName === 'headingsLg' ? theme.fontSizeLg : theme.fontSize) *
      defaultHeadingMgBottom
  );
};

// Functions that return strings for displaying current theme values

export const displayBodyLineHeight: TDisplayBodyPropertyValue = ({ body }) =>
  `${Math.round(body.lineHeight * 100)}%`;

export const displayBodyLineHeightLg: TDisplayBodyPropertyValue = ({ body }) =>
  `${Math.round((body.lineHeightLg || body.lineHeight) * 100)}%`;

export const displayBodyMaxWidth: TDisplayBodyPropertyValue = ({ body }) =>
  `${body.maxWidth}px`;

export const displayBodyMargin: TDisplayBodyPropertyValue = theme =>
  `${theme.body.margin * theme.fontSize}px (telas pequenas) e ${theme.body
    .margin * theme.fontSizeLg}px (telas grandes)`;

export const displayHeadingSize: TDisplayHeadingPropertyValue = (h, i, theme) =>
  `${+(h.fontSize || getHeadingFontSize(h, i, theme).toFixed(2))}px`;

export const displayHeadingLineHeight: TDisplayHeadingPropertyValue = (
  h,
  i,
  theme
) =>
  `${
    h.lineHeight ? Math.round(h.lineHeight * 100) : theme.body.lineHeight * 100
  }%`;

export const displayHeadingMarginTop: TDisplayHeadingPropertyValue = (
  h,
  i,
  theme
) =>
  // If we have a marginTop property, we'll use it as `${marginTop}px`
  // Else, check if there's a font-size, if not, get the rythm-based font-size, and multiply either by the defaultHeadingMgTop 'em' value
  // Then, round it to 2 decimal places
  `${+(h.marginTop
    ? h.marginTop
    : (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop
  ).toFixed(2)}px`;

export const displayHeadingMarginBottom: TDisplayHeadingPropertyValue = (
  h,
  i,
  theme
) =>
  `${+(h.marginBottom
    ? h.marginBottom
    : theme.fontSize * defaultHeadingMgBottom
  ).toFixed(2)}px`;
