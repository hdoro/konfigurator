import { Router } from '@reach/router';
import * as queryString from 'querystring';
import * as React from 'react';
import defaultMarkdown from './defaultMarkdown';
import { DefaultRoute } from './routes/DefaultRoute';
import { EditorRoute } from './routes/EditorRoute';
import { defaultUserTheme } from './styles/defaultUserTheme';

export enum EConfigSpaces {
  typography,
  headings,
  body,
  colors,
}

export interface IHeadingTypography {
  fontSize?: number;
  fontSizeLg?: number;
  marginTop?: number;
  marginBottom?: number;
  lineHeight?: number;
}

export interface IBodyTypography {
  margin: number;
  lineHeight: number;
  lineHeightLg?: number;
  maxWidth: number;
}

export interface IThemeColors {
  text: string;
  heading?: string;
}

export interface IUserTheme {
  // Size
  fontSize: number;
  fontSizeLg: number;
  rythmRatio: number;
  // Family
  fontFamilyBody: string;
  fontFamilyHeading?: string;
  familyCategoryBody: 'sans-serif' | 'serif' | 'monospace';
  familyCategoryHeading?: 'sans-serif' | 'serif' | 'monospace';
  // Tag-specific typography
  body: IBodyTypography;
  headings: IHeadingTypography[];
  headingsLg: IHeadingTypography[];
  // General
  colors: IThemeColors;
  customCSS?: string;
}

export interface IRootContainerState {
  content: string;
  userTheme: IUserTheme;
  activeConfigSpace: EConfigSpaces | undefined;
}

export class RootContainer extends React.Component<{}, IRootContainerState> {
  public state = {
    content: defaultMarkdown,
    userTheme: defaultUserTheme,
    activeConfigSpace: undefined,
  };

  public changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({
      content: e.currentTarget.value,
    });
    localStorage.setItem('konfiguratorContent', e.currentTarget.value);
  };

  public changeThemeProp = (propName: string, propValue: any) => {
    let value = propValue;

    // If it's a number, round it to 2 places to avoid useless decimals
    if (typeof propValue === 'number') {
      value = +propValue.toFixed(2);
    }

    // Check if the name is split by a dot, meaning it's
    const splittedPropName = propName.split('.');
    if (splittedPropName[1]) {
      this.setState(prevState => ({
        ...prevState,
        userTheme: {
          ...prevState.userTheme,
          [splittedPropName[0]]: {
            ...prevState.userTheme[splittedPropName[0]],
            [splittedPropName[1]]: value,
          },
        },
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        userTheme: {
          ...prevState.userTheme,
          [propName]: value,
        },
      }));
    }
  };

  public changeThemeRoot = (propName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      userTheme: {
        ...prevState.userTheme,
        [propName]: e.target.value,
      },
    }));
  };

  public changeOpenedConfigSpace = (
    activeConfigSpace: EConfigSpaces | undefined
  ) => (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      activeConfigSpace,
    });
  };

  public resetTheme = () => {
    this.setState({
      userTheme: defaultUserTheme,
      content: defaultMarkdown,
    });
    localStorage.removeItem('konfiguratorContent');
    localStorage.removeItem('konfiguratorTheme');
  };

  public componentDidUpdate() {
    localStorage.setItem(
      'konfiguratorTheme',
      JSON.stringify(this.state.userTheme)
    );
  }

  public componentDidMount() {
    const storedContent = localStorage.getItem('konfiguratorContent');
    const storedTheme = localStorage.getItem('konfiguratorTheme');
    if (storedContent) {
      this.setState({
        content: storedContent,
      });
    }
    if (storedTheme) {
      this.setState({
        userTheme: JSON.parse(storedTheme),
      });
    }
    if (window.location.search) {
      const sharedTheme: any = queryString.parse(
        window.location.search.substr(1)
      );
      if (sharedTheme.theme) {
        this.setState({
          userTheme: JSON.parse(sharedTheme.theme),
        });
      }
      window.location.search = '';
    }
  }

  public render() {
    const { content, userTheme, activeConfigSpace } = this.state;
    return (
      <Router>
        <EditorRoute
          path="/editor"
          content={content}
          changeContent={this.changeContent}
        />
        <DefaultRoute
          default={true}
          content={content}
          userTheme={userTheme}
          changeThemeRoot={this.changeThemeRoot}
          activeSpace={activeConfigSpace}
          changeSpace={this.changeOpenedConfigSpace}
          changeThemeProperty={this.changeThemeProp}
          resetTheme={this.resetTheme}
        />
      </Router>
    );
  }
}

export default RootContainer;
