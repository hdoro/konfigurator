import { appTheme } from "./appTheme";

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
  div[id^="font-picker"] .dropdown-button:hover, div[id^="font-picker"] .dropdown-button.expanded, div[id^="font-picker"] .dropdown-button:focus {
    background: #FcFCFC;
  }
  div[id^="font-picker"] .dropdown-button {
    background: transparent;
  }
  div[id^="font-picker"] ul {
    background: #f1f1f1;
    z-index: 10;
  }

  // Related to the color picker
  .twitter-picker {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default baseStyles;