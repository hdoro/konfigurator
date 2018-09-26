import {
  EConfigSpaces,
  IHeadingTypography,
  IUserTheme,
} from '../RootContainer';

export type NoParamsAny = () => any;

export type TInputChange = (e: React.ChangeEvent<HTMLInputElement>) => any;

export type TInputHandler = (propName: string) => TInputChange;

export type TChangeConfigSpace = (
  configSpace?: EConfigSpaces
) => (e: React.MouseEvent<HTMLButtonElement>) => any;

export type TChangeThemeProp = (propName: string, propValue: any) => any;

export type TDisplayHeadingPropertyValue = (
  h: IHeadingTypography,
  i: number,
  theme: IUserTheme
) => string;

export type TReturnHeadingPropertyValue = (
  h: IHeadingTypography,
  options: {
    i?: number;
    theme?: IUserTheme;
    propertyName?: string;
  }
) => number;

export type TDisplayBodyPropertyValue = (theme: IUserTheme) => string;

export type TReturnBodyPropertyValue = (theme: IUserTheme) => number;
