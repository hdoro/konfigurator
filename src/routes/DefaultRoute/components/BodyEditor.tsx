import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import * as React from 'react';
import styled from 'styled-components';
import { IUserTheme } from '../../../RootContainer';
import { TChangeThemeProp } from '../../../utils/types';
import { bodyProperties } from './themeProperties';

export interface IGeneralTypographyEditorProps {
  theme: IUserTheme;
  changeThemeProperty: TChangeThemeProp;
}

const PropertyWrapper = styled.div`
  flex-basis: 100%;
  margin: 1rem 0;
`;

export const BodyEditor: React.SFC<IGeneralTypographyEditorProps> = props => {
  const handleSlider = (propName: string) => (e: any, value: number) => {
    props.changeThemeProperty(propName, value);
  };

  const { theme } = props;
  return (
    <>
      {bodyProperties.map(p => (
        <PropertyWrapper key={p.name}>
          <Typography id={`typography__body-${p.name}`}>
            {p.label}: {p.displayFunction(theme)}
          </Typography>
          <Slider
            aria-labelledby={`typography__body-${p.name}`}
            onChange={handleSlider(p.name)}
            max={p.max}
            min={p.min}
            step={p.step}
            value={theme.body[p.name]}
          />
          {p.note ? <Typography variant="caption">{p.note}</Typography> : null}
        </PropertyWrapper>
      ))}
    </>
  );
};

export default BodyEditor;
