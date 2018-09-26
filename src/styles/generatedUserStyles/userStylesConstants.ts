// To be multiplied by ems
// Rationale: we want to have bigger headings further apart from
// elements on top of it, hence the default margin-top should be
// based on ems
export const defaultHeadingMgTop = 1.5;

// To be multiplied by rems
// Rationale: We want headings to be somewhat close to paragraphs
// below, therefore we get a safe margin based on the root font-size
// (rem) that keeps it readable but doesn't separate them too much
export const defaultHeadingMgBottom = 0.5;

// Each type of font should have appropriate fallbacks based on their category
// TODO: add this as a "fontFamilyBodyFallback" property in the exported theme
// for easier customization on the file
export const fontFallbacks = {
  'sans-serif':
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  serif:
    'Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif',
  monospace:
    'Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace',
};

export const baseUserStyles = `
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
`;
