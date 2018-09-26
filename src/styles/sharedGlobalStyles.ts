// Styles shared by both the app and the iframe holding the preview
export const sharedGlobalStyles = `
  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background: #CE003C; // just a nicer color for the sidebar :)
  }

  html {
    box-sizing: border-box;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }
`;

export default sharedGlobalStyles;
