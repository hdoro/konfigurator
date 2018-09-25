import {
  defaultHeadingMgBottom,
  defaultHeadingMgTop,
  getHeadingFontSize
} from "../styles/userTheme";
import { TGetHeadingProperty } from "./types";

export const displayHeadingSize: TGetHeadingProperty = (h, i, theme) =>
  `${+(h.fontSize || getHeadingFontSize(h, i, theme).toFixed(2))}px`;

export const displayHeadingLineHeight: TGetHeadingProperty = (h, i, theme) =>
  `${
    h.lineHeight ? Math.round(h.lineHeight * 100) : theme.body.lineHeight * 100
  }%`;

export const displayHeadingMarginTop: TGetHeadingProperty = (h, i, theme) =>
  `${+(h.marginTop
    ? h.marginTop
    : (h.fontSize || getHeadingFontSize(h, i, theme)) * defaultHeadingMgTop
  ).toFixed(2)}px`;

export const displayHeadingMarginBottom: TGetHeadingProperty = (h, i, theme) =>
  `${+(h.marginBottom
    ? h.marginBottom
    : theme.fontSize * defaultHeadingMgBottom
  ).toFixed(2)}px`;
