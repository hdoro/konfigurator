import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import { RootContainer } from './RootContainer';
import { baseStyles } from './styles/baseStyles';

const GlobalStyle = createGlobalStyle`
  ${baseStyles}
  body {
    background: white;
  }
`

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
