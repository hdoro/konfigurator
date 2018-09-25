import { IUserTheme } from '../RootContainer';

export const defaultUserTheme: IUserTheme = {
  // Size
  fontSize: 16,
  fontSizeLg: 20,
  rythmRatio: 1.25,
  // Family
  fontFamilyBody: 'Roboto',
  familyCategoryBody: 'sans-serif',
  // Tag-specific
  body: {
    maxWidth: 700,
    lineHeight: 1.8,
    margin: 2,
  },
  headings: Array(4).fill({}),
  headingsLg: Array(4).fill({}),
  // General
  colors: {
    text: '#333',
  },
};

export default defaultUserTheme;
