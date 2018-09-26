import { IUserTheme, IHeadingTypography } from '../RootContainer';

const defaultHeadings: IHeadingTypography[] = [
  { fontSize: 39 },
  { fontSize: 31 },
  { fontSize: 25 },
  { fontSize: 20 },
];

// For the default values of headings on large screens, we
// want to move 1 level up in the modular scale
const defaultHeadingsLg: IHeadingTypography[] = [
  { fontSize: 49 },
  ...defaultHeadings.slice(0, defaultHeadings.length - 1),
];

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
  headings: defaultHeadings,
  headingsLg: defaultHeadingsLg,
  // General
  colors: {
    text: '#333',
  },
};

export default defaultUserTheme;
