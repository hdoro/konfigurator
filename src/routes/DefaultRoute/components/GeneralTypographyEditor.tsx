import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import FontPicker from 'font-picker-react';
import * as React from 'react';
import styled from 'styled-components';
import { IUserTheme } from '../../../RootContainer';
import {
  defaultHeadingMgBottom,
  defaultHeadingMgTop,
  getHeadingFontSize,
} from '../../../styles/userTheme';
import { TChangeThemeProp } from '../../../utils/types';

export interface IGeneralTypographyEditorProps {
  theme: IUserTheme;
  changeThemeProperty: TChangeThemeProp;
}

const PropertyWrapper = styled.div`
  flex-basis: 100%;
  margin: 1rem 0;
`;

export class GeneralTypographyEditor extends React.Component<
  IGeneralTypographyEditorProps,
  {}
> {
  public handleSlider = (propName: string) => (e: any, value: number) => {
    this.props.changeThemeProperty(propName, value);
  };

  public handleFonts = (isHeading: boolean = false) => (e: any) => {
    // Changing the font family
    this.props.changeThemeProperty(
      isHeading ? 'fontFamilyHeading' : 'fontFamilyBody',
      e.family
    );
    // Changing the family category
    this.props.changeThemeProperty(
      isHeading ? 'familyCategoryHeading' : 'familyCategoryBody',
      e.category
    );
  };

  public render() {
    const {
      props: { theme },
      state,
    } = this;
    return (
      <>
        <Typography variant="body2" style={{ margin: '1.5rem 0 .5rem' }}>
          Tamanho de fonte
        </Typography>
        <PropertyWrapper>
          <Typography id={`typography__font-size`}>
            Telas menores: {theme.fontSize}
            px
          </Typography>
          <Slider
            aria-labelledby={`typography__font-size`}
            onChange={this.handleSlider('fontSize')}
            min={10}
            max={40}
            step={1}
            value={theme.fontSize}
          />
        </PropertyWrapper>
        <PropertyWrapper>
          <Typography id={`typography__font-size_lg`}>
            Telas maiores: {theme.fontSizeLg}
            px
          </Typography>
          <Slider
            aria-labelledby={`typography__font-size_lg`}
            onChange={this.handleSlider('fontSizeLg')}
            min={10}
            max={40}
            step={1}
            value={theme.fontSizeLg}
          />
          <Typography variant="caption">
            Pode ser o mesmo das telas menores, mas cuidado com acessibilidade!
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <Typography id={`typography__rythm`}>
            Ritmo da escala modular: {+theme.rythmRatio.toFixed(2)}x
          </Typography>
          <Slider
            aria-labelledby={`typography__rythm`}
            onChange={this.handleSlider('rythmRatio')}
            min={1}
            max={2.5}
            step={0.01}
            value={theme.rythmRatio}
          />
          <Typography variant="caption">
            Nota: esta propriedade serve para definir uma escala padrão para
            todos os tamanhos de fonte, mas você pode passar por cima dela
            definindo o tamanho de cada cabeçalho manualmente ;)
          </Typography>
        </PropertyWrapper>
        <Typography variant="body2" style={{ margin: '1.5rem 0 .5rem' }}>
          Família da fonte
        </Typography>
        <PropertyWrapper>
          <Typography id={`typography__font-family`}>
            Corpo do texto / padrão:
          </Typography>
          <FontPicker
            activeFont={theme.fontFamilyBody}
            apiKey={process.env.REACT_APP_FONTS_KEY}
            onChange={this.handleFonts()}
            options={{
              categories: ['sans-serif', 'serif', 'monospace'],
              sort: 'popularity',
              name: 'headings',
              variants: ['regular', 'italic', '700'],
            }}
          />
        </PropertyWrapper>
        <PropertyWrapper>
          <Typography id={`typography__font-family`}>Cabeçalhos:</Typography>
          <FontPicker
            activeFont={theme.fontFamilyHeading || theme.fontFamilyBody}
            apiKey={process.env.REACT_APP_FONTS_KEY}
            onChange={this.handleFonts(true)}
            options={{
              categories: ['sans-serif', 'serif', 'monospace'],
              sort: 'popularity',
              name: 'headingsLg',
              variants: ['regular', 'italic', '700'],
            }}
          />
          <Typography variant="caption" style={{ marginTop: '.5rem' }}>
            Você pode deixar esse valor em branco se quiser só 1 família pra
            todo o texto ;)
          </Typography>
        </PropertyWrapper>
      </>
    );
  }
}

export default GeneralTypographyEditor;
