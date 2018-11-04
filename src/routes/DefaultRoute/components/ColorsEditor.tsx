import { Typography } from '@material-ui/core';
import * as React from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import styled from 'styled-components';
import { IUserTheme } from '../../../RootContainer';
import { TChangeThemeProp } from '../../../utils/types';
import ColorPicker from './ColorPicker';

export interface IGeneralTypographyEditorProps {
  theme: IUserTheme;
  changeThemeProperty: TChangeThemeProp;
}

const PropertyWrapper = styled.div`
  flex-basis: 100%;
  margin: 1rem 0;
`;

export const ColorsEditor: React.SFC<IGeneralTypographyEditorProps> = props => {
  const { theme } = props;
  return (
    <>
      <ColorPicker
        value={props.theme.colors.text}
        title="Cor de texto"
        id="text"
        changeThemeProperty={props.changeThemeProperty}
      />
      <ColorPicker
        value={theme.colors.heading || theme.colors.text}
        title="Cor de cabeçalhos"
        id="heading"
        changeThemeProperty={props.changeThemeProperty}
      />
      <ColorPicker
        value={theme.colors.link}
        title="Cor de links"
        id="link"
        changeThemeProperty={props.changeThemeProperty}
      />
      <ColorPicker
        value={theme.colors.bg}
        title="Cor de background"
        id="bg"
        changeThemeProperty={props.changeThemeProperty}
      />
    </>
  );
};

export default ColorsEditor;
