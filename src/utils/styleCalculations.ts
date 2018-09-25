import {
  defaultHeadingMgBottom,
  defaultHeadingMgTop,
  getHeadingFontSize,
} from '../styles/userTheme';
import { TGetHeadingProperty, TReturnHeadingPropertyValue } from './types';

export const returnHeadingSize: TReturnHeadingPropertyValue = h =>
  h.fontSize || 0;

export const returnHeadingLineHeight: TReturnHeadingPropertyValue = h =>
  h.lineHeight || 0;

export const returnHeadingMarginTop: TReturnHeadingPropertyValue = (
  h,
  { i, theme }
) => {
  if (!i || !theme) {
    return 0;
  }

  return (
    h.marginTop ||
    (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop
  );
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

// export const returnHeadingMarginTop: TReturnHeadingPropertyValue = h => (h.lineHeight || 0);

export const displayHeadingSize: TGetHeadingProperty = (h, i, theme) =>
  `${+(h.fontSize || getHeadingFontSize(h, i, theme).toFixed(2))}px`;

export const displayHeadingLineHeight: TGetHeadingProperty = (h, i, theme) =>
  `${
    h.lineHeight ? Math.round(h.lineHeight * 100) : theme.body.lineHeight * 100
  }%`;

export const displayHeadingMarginTop: TGetHeadingProperty = (h, i, theme) =>
  // If we have a marginTop property, we'll use it as `${marginTop}px`
  // Else, check if there's a font-size, if not, get the rythm-based font-size, and multiply either by the defaultHeadingMgTop 'em' value
  // Then, round it to 2 decimal places
  `${+(h.marginTop
    ? h.marginTop
    : (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop
  ).toFixed(2)}px`;

export const displayHeadingMarginBottom: TGetHeadingProperty = (h, i, theme) =>
  `${+(h.marginBottom
    ? h.marginBottom
    : theme.fontSize * defaultHeadingMgBottom
  ).toFixed(2)}px`;
