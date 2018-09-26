import { RouteComponentProps, Router } from '@reach/router';
import * as React from 'react';
import styled from 'styled-components';
import { EConfigSpaces, IUserTheme } from '../../RootContainer';
import {
  NoParamsAny,
  TChangeConfigSpace,
  TChangeThemeProp,
  TInputHandler,
} from '../../utils/types';
import { ExportRoute } from '../ExportRoute';
import { ResultRoute } from '../ResultRoute';
import ConfigSpace from './components/ConfigSpace';
import { GeneralTypographyEditor } from './components/GeneralTypographyEditor';
import { HeadingsEditor } from './components/HeadingsEditor';
import Sidebar from './components/Sidebar';
import { BodyEditor } from './components/BodyEditor';
import { ColorsEditor } from './components/ColorsEditor';

export interface IDefaultViewProps extends RouteComponentProps {
  content: string;
  userTheme: IUserTheme;
  changeThemeRoot: TInputHandler;
  activeSpace: EConfigSpaces | undefined;
  changeSpace: TChangeConfigSpace;
  changeThemeProperty: TChangeThemeProp;
  resetTheme: NoParamsAny;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  overflow: hidden;
  grid-gap: 0.5rem;
`;

export const DefaultRoute: React.SFC<IDefaultViewProps> = props => {
  const { userTheme: theme } = props;
  return (
    <Container>
      <div style={{ display: 'flex' }}>
        <Sidebar
          activeSpace={props.activeSpace}
          changeSpace={props.changeSpace}
          userTheme={theme}
          changeThemeRoot={props.changeThemeRoot}
          resetTheme={props.resetTheme}
        />
        <ConfigSpace
          isOpen={props.activeSpace === EConfigSpaces.headings}
          changeSpace={props.changeSpace}
          title="Cabeçalhos"
        >
          <HeadingsEditor
            theme={theme}
            propertyName="headings"
            headings={theme.headings}
            changeThemeProperty={props.changeThemeProperty}
            title="Telas pequenas"
          />
          <HeadingsEditor
            theme={theme}
            propertyName="headingsLg"
            headings={theme.headingsLg}
            changeThemeProperty={props.changeThemeProperty}
            title="Telas grandes"
          />
        </ConfigSpace>
        <ConfigSpace
          isOpen={props.activeSpace === EConfigSpaces.typography}
          changeSpace={props.changeSpace}
          title="Tipografia Básica"
        >
          <GeneralTypographyEditor
            theme={theme}
            changeThemeProperty={props.changeThemeProperty}
          />
        </ConfigSpace>
        <ConfigSpace
          isOpen={props.activeSpace === EConfigSpaces.body}
          changeSpace={props.changeSpace}
          title="Corpo do texto"
        >
          <BodyEditor
            theme={theme}
            changeThemeProperty={props.changeThemeProperty}
          />
        </ConfigSpace>
        <ConfigSpace
          isOpen={props.activeSpace === EConfigSpaces.colors}
          changeSpace={props.changeSpace}
          title="Cores"
        >
          <ColorsEditor
            theme={theme}
            changeThemeProperty={props.changeThemeProperty}
          />
        </ConfigSpace>
      </div>
      <Router>
        <ResultRoute
          path="/"
          content={props.content}
          userTheme={props.userTheme}
        />
        <ExportRoute path="/export" userTheme={props.userTheme} />
      </Router>
    </Container>
  );
};

DefaultRoute.displayName = 'DefaultView';

export default DefaultRoute;
