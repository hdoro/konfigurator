import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import { RootContainer } from './RootContainer';
import { sharedGlobalStyles } from './styles/sharedGlobalStyles';
import { appSpecificStyles } from './styles/appSpecificStyles';

const GlobalStyle = createGlobalStyle`
  ${sharedGlobalStyles}
  ${appSpecificStyles}
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <RootContainer />
      </div>
    );
  }
}

export default App;
