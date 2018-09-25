import { createGlobalStyle } from 'styled-components';
import { IHeadingTypography, IUserTheme } from '../RootContainer';
import { baseStyles } from './baseStyles';

export const defaultHeadingMgTop = 1.5;
export const defaultHeadingMgBottom = 0.5;

const fontFallbacks = {
  'sans-serif':
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  serif:
    'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
  monospace:
    'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
};

export const getHeadingFontSize = (
  heading: IHeadingTypography,
  i: number,
  theme: IUserTheme
) =>
  // If the heading's font-size is not explicitly set, we'll
  // use the rythm ratio to set it automatically by elevating it
  // by the index's distance to the headings array length
  heading.fontSize
    ? heading.fontSize
    : Math.pow(theme.rythmRatio, theme.headings.length - i) * theme.fontSize;

const getHeadingStyles = (
  heading: IHeadingTypography,
  i: number,
  theme: IUserTheme
) => {
  return `
    h${i + 1} {
      font-size: ${getHeadingFontSize(heading, i, theme)}px;
      margin: ${
        heading.marginTop || heading.marginTop === 0
          ? `${heading.marginTop}px`
          : `${defaultHeadingMgTop}em`
      } 0 ${
    heading.marginBottom || heading.marginBottom === 0
      ? `${heading.marginBottom}px`
      : `${defaultHeadingMgBottom}rem`
  };
      line-height: ${heading.lineHeight || 'inherit'};
    }
  `.trim();
};

export const GlobalUserStyles = createGlobalStyle`
  ${baseStyles}
  body {
    padding: 2.5rem 1rem 2.5rem 0;
  }
  img {
    max-width: 100%;
    margin: 2em auto;
  }
  * {
    color: inherit;
  }
  li > ul, li > ol {
    margin-top: 0;
  }
  ${({ theme }: { theme: IUserTheme }) => `
    :root {
      font-size: ${theme.fontSize}px;
      font-family: '${theme.fontFamilyBody}', ${fontFallbacks[
    theme.familyCategoryBody
  ] || fontFallbacks['sans-serif']};
      color: ${theme.colors.text};
    }
    p, ul, ol {
      line-height: ${theme.body.lineHeight};
      margin: ${theme.body.margin}rem 0;
    }
    li {
      margin: ${theme.body.margin / 2}rem 0;
      line-height: inherit;
    }
    h1, h2, h3, h4 {
      font-family: ${
        theme.fontFamilyHeading && theme.familyCategoryHeading
          ? `'${theme.fontFamilyHeading}', ${fontFallbacks[
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
    ${
      // For each heading, return their font-size, margin and line-height
      theme.headings
        .map((heading, i) => getHeadingStyles(heading, i, theme))
        .join('\n')
    };
    @media screen and (min-width: 500px) {
      :root {
        font-size: ${theme.fontSizeLg}px;
      }
      p, ul, ol {
        line-height: ${theme.body.lineHeightLg || theme.body.lineHeight};
        max-width: ${theme.body.maxWidth}px;
      }
      ${
        // For each heading, return their font-size, margin and line-height
        theme.headingsLg
          .map((heading, i) => getHeadingStyles(heading, i, theme))
          .join('\n')
      };
    }
  `}}
`;
