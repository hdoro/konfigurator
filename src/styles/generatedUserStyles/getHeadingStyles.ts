import { IHeadingTypography, IUserTheme } from '../../RootContainer';
import {
  defaultHeadingMgTop,
  defaultHeadingMgBottom,
} from './userStylesConstants';

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
