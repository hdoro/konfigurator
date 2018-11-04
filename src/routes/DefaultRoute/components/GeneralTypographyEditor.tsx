import { Typography } from '@material-ui/core';
import { Slider } from '@material-ui/lab';
import FontPicker from 'font-picker-react';
import * as React from 'react';
import styled from 'styled-components';
import { IUserTheme } from '../../../RootContainer';
import { TChangeThemeProp } from '../../../utils/types';
import { cutDecimals } from '../../../utils/strings';

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
    this.props.changeThemeProperty(propName, value ? cutDecimals(value) : 0);
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
        <Typography variant="body2" style={{ margin: '1.5rem 0 .5rem' }}>
          Peso da fonte
        </Typography>
        <Typography variant="caption">
          <strong>Nota:</strong> Nem todos os pesos estão disponíveis para as
          fontes selecionadas. Para informações sobre cada fonte, se refira ao{' '}
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            diretório de fontes do Google
          </a>
          .
        </Typography>
        <PropertyWrapper>
          <Typography id={`typography__bodyWeight`}>
            Corpo do texto: {theme.bodyWeight}
          </Typography>
          <Slider
            aria-labelledby={`typography__bodyWeight`}
            onChange={this.handleSlider('bodyWeight')}
            min={100}
            max={900}
            step={100}
            value={theme.bodyWeight}
          />
        </PropertyWrapper>
        <PropertyWrapper>
          <Typography id={`typography__headingWeight`}>
            Cabeçalho: {theme.headingWeight}
          </Typography>
          <Slider
            aria-labelledby={`typography__headingWeight`}
            onChange={this.handleSlider('headingWeight')}
            min={100}
            max={900}
            step={100}
            value={theme.headingWeight}
          />
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
              limit: 300,
            }}
          />
        </PropertyWrapper>
        <PropertyWrapper style={{ paddingBottom: '5rem' }}>
          <Typography id={`typography__font-family`}>Cabeçalhos:</Typography>
          <FontPicker
            activeFont={theme.fontFamilyHeading || theme.fontFamilyBody}
            apiKey={process.env.REACT_APP_FONTS_KEY}
            onChange={this.handleFonts(true)}
            options={{
              categories: ['sans-serif', 'serif', 'monospace'],
              sort: 'popularity',
              name: 'headingsLg',
              limit: 300,
            }}
          />
        </PropertyWrapper>
      </>
    );
  }
}

export default GeneralTypographyEditor;
