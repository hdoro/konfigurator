import { Typography } from '@material-ui/core';
import * as React from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import styled from 'styled-components';
import { IUserTheme } from '../../../RootContainer';
import { TChangeThemeProp } from '../../../utils/types';

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
  const handleColor = (colorName: string) => (e: ColorResult) => {
    props.changeThemeProperty(`colors.${colorName}`, e.hex);
  };
  return (
    <>
      <Typography variant="body2" style={{ margin: '1.5rem 0 .5rem' }}>
        Cores
      </Typography>
      <PropertyWrapper>
        <Typography>Cor de texto</Typography>
        <TwitterPicker
          color={theme.colors.text}
          onChange={handleColor('text')}
          colors={['#777', '#666', '#555', '#444', '#333', '#222', '#111']}
        />
      </PropertyWrapper>
      <PropertyWrapper>
        <Typography>Cor de cabeçalhos</Typography>
        <TwitterPicker
          color={theme.colors.heading || theme.colors.text}
          onChange={handleColor('heading')}
          colors={['#777', '#666', '#555', '#444', '#333', '#222', '#111']}
        />
        <Typography variant="caption">
          Pode ser a mesma cor do texto ;)
        </Typography>
      </PropertyWrapper>
    </>
  );
};

export default ColorsEditor;
