// Styles applied to the whole application
export const appSpecificStyles = `
  body {
    background: white;
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

export default appSpecificStyles;
