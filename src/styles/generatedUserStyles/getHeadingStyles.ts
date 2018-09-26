import { IHeadingTypography, IUserTheme } from '../../RootContainer';
import {
  defaultHeadingMgTop,
  defaultHeadingMgBottom,
} from './userStylesConstants';

export const getHeadingFontSize = ({
  h,
  i,
  theme,
  isLarge = false,
}: {
  h: IHeadingTypography;
  i: number;
  theme: IUserTheme;
  isLarge?: boolean;
}) =>
  // If the heading's font-size is not explicitly set, we'll
  // use the rythm ratio to set it automatically by elevating it
  // by the index's distance to the headings array length
  h.fontSize
    ? h.fontSize
    : Math.pow(theme.rythmRatio, theme.headings.length - i) *
      (isLarge ? theme.fontSizeLg : theme.fontSize);

export const getHeadingStyles = (h: IHeadingTypography, i: number) => {
  return `
    h${i + 1} {
      font-size: ${h.fontSize}px;
      margin: ${
        h.marginTop || h.marginTop === 0
          ? `${h.marginTop}px`
          : `${defaultHeadingMgTop}em`
      } 0 ${
    h.marginBottom || h.marginBottom === 0
      ? `${h.marginBottom}px`
      : `${defaultHeadingMgBottom}rem`
  };
      line-height: ${h.lineHeight || 'inherit'};
    }
  `.trim();
};
