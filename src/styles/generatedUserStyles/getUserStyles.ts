import { fontFallbacks } from './userStylesConstants';
import { IUserTheme } from '../../RootContainer';
import { getHeadingStyles } from './getHeadingStyles';

export const getUserStyles = (theme: IUserTheme) => `
  :root {
    font-size: ${theme.fontSize}px;
    font-family: "${theme.fontFamilyBody}", ${fontFallbacks[
  theme.familyCategoryBody
] || fontFallbacks['sans-serif']};
    color: ${theme.colors.text};
  }
  body {
    background: ${theme.colors.bg};
  }
  p, ul, ol {
    line-height: ${theme.body.lineHeight};
    margin: ${theme.body.margin}rem 0;
    font-weight: ${theme.bodyWeight};
  }
  li {
    margin: ${theme.body.margin / 2}rem 0;
    line-height: inherit;
  }
  h1, h2, h3, h4 {
    font-weight: ${theme.headingWeight};
    font-family: ${
      theme.fontFamilyHeading && theme.familyCategoryHeading
        ? `"${theme.fontFamilyHeading}", ${fontFallbacks[
            theme.familyCategoryHeading
          ] || fontFallbacks['sans-serif']}`
        : 'inherit'
    };
    color: ${theme.colors.heading || 'inherit'};
  }
  // Paragraphs coming right after headings should have margin-top: 0
  // to give the margin control to the heading
  h1 ~ p, h2 ~ p, h3 ~ p, h4 ~ p {
    margin-top: 0;
  }

  // Coloring links
  a {
    color: ${theme.colors.link};
  }

  ${theme.headings
    .map((heading, i) => getHeadingStyles(heading, i))
    .join('\n')};
  @media screen and (min-width: 500px) {
    :root {
      font-size: ${theme.fontSizeLg}px;
    }
    p, ul, ol {
      line-height: ${theme.body.lineHeightLg || theme.body.lineHeight};
      max-width: ${theme.body.maxWidth}px;
    }
    ${theme.headingsLg
      .map((heading, i) => getHeadingStyles(heading, i))
      .join('\n')};
  }
`;
