import { appTheme } from './appTheme';

export const baseStyles = `
  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background: ${appTheme.primary};
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  // Related to the font family dropdown selector
  .dropdown-font-name {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .dropdown-button:hover, .dropdown-button.expanded, .dropdown-button:focus {
    background: #FcFCFC !important;
  }
  .dropdown-button {
    background: transparent !important;
  }
  .dropdown-button ~ ul {
    background: #FcFCFC !important;
    z-index: 10 !important;
  }

  // Related to the color picker
  .twitter-picker {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default baseStyles;
