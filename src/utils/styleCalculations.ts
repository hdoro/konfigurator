import {
  TDisplayHeadingPropertyValue,
  TDisplayBodyPropertyValue,
} from './types';
import {
  defaultHeadingMgTop,
  defaultHeadingMgBottom,
} from '../styles/generatedUserStyles/userStylesConstants';
import { cutDecimals } from './strings';

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
  `${cutDecimals(h.fontSize)}px`;

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
  `${cutDecimals(
    h.marginTop ? h.marginTop : h.fontSize * defaultHeadingMgTop
  )}px`;

export const displayHeadingMarginBottom: TDisplayHeadingPropertyValue = (
  h,
  i,
  theme
) =>
  `${cutDecimals(
    h.marginBottom ? h.marginBottom : theme.fontSize * defaultHeadingMgBottom
  )}px`;
