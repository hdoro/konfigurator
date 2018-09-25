import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Slider } from '@material-ui/lab';
import * as React from 'react';
import styled from 'styled-components';
import { IHeadingTypography, IUserTheme } from '../../../RootContainer';
import {
  defaultHeadingMgBottom,
  defaultHeadingMgTop,
  getHeadingFontSize,
} from '../../../styles/userTheme';
import { TChangeThemeProp } from '../../../utils/types';

export interface IHeadingsEditorProps {
  theme: IUserTheme;
  headings: IHeadingTypography[];
  changeThemeProperty: TChangeThemeProp;
  propertyName: string;
  title: string;
}

export interface IHeadingsEditorState {
  openedPanels: boolean[];
}

const PropertyWrapper = styled.div`
  flex-basis: 100%;
  margin: 1rem 0;
`;

export class HeadingsEditor extends React.Component<
  IHeadingsEditorProps,
  IHeadingsEditorState
> {
  public state = {
    openedPanels: this.props.headings.map(() => false),
  };

  public handleSlider = (index: number, headingPropName: string) => (
    e: any,
    value: number
  ) => {
    const { headings, changeThemeProperty, propertyName } = this.props;
    const newHeadings = [
      ...headings.slice(0, index),
      {
        ...headings[index],
        [headingPropName]: value,
      },
      ...headings.slice(index + 1),
    ];
    changeThemeProperty(propertyName, newHeadings);
  };

  public handlePanel = (index: number) => (e: any) => {
    this.setState(prevState => ({
      openedPanels: [
        ...prevState.openedPanels.slice(0, index),
        !prevState.openedPanels[index],
        ...prevState.openedPanels.slice(index + 1),
      ],
    }));
  };

  public changeHeadingsNumber = (isDelete: boolean = false) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const { headings, changeThemeProperty, propertyName } = this.props;
    let newHeadings = [...headings];
    if (isDelete) {
      newHeadings = newHeadings.slice(0, headings.length - 1);
    } else {
      newHeadings = [...newHeadings, {}];
    }
    changeThemeProperty(propertyName, newHeadings);
  };

  public render() {
    const { props, state } = this;
    return (
      <>
        <Typography variant="body2" style={{ margin: '1.5rem 0 .5rem' }}>
          {props.title}
        </Typography>
        {props.headings.map((heading, i) => {
          const { fontSize, lineHeight, marginBottom, marginTop } = heading;
          const headingDefaultFontSize = getHeadingFontSize(
            heading,
            i,
            props.theme
          );
          return (
            <ExpansionPanel
              key={`heading-${i}`}
              expanded={state.openedPanels[i]}
              onChange={this.handlePanel(i)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Cabeçalho {i + 1}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ flexWrap: 'wrap' }}>
                <PropertyWrapper>
                  <Typography id={`heading${i}__font-size`}>
                    Tamanho da fonte:{' '}
                    {fontSize ? fontSize : headingDefaultFontSize}
                    px
                  </Typography>
                  <Slider
                    aria-labelledby={`heading${i}__font-size`}
                    onChange={this.handleSlider(i, 'fontSize')}
                    max={80}
                    step={1}
                    value={fontSize || 0}
                  />
                  <Typography variant="caption">
                    Nota: caso igual a 0, o tamanho seguirá o ritmo geral
                    definido, sendo multiplicado pelo tamanho da fonte.
                  </Typography>
                </PropertyWrapper>
                <PropertyWrapper>
                  <Typography id={`heading${i}__line-height`}>
                    Altura da linha:{' '}
                    {lineHeight
                      ? Math.round(lineHeight * 100)
                      : props.theme.body.lineHeight * 100}
                    %
                  </Typography>
                  <Slider
                    aria-labelledby={`heading${i}__line-height`}
                    onChange={this.handleSlider(i, 'lineHeight')}
                    max={4}
                    step={0.05}
                    value={lineHeight || 0}
                  />
                  <Typography variant="caption">
                    Nota: caso igual a 0, o valor padrão será a altura da linha
                    do parágrafo.
                  </Typography>
                </PropertyWrapper>
                <PropertyWrapper>
                  <Typography id={`heading${i}__mg-top`}>
                    Margem no topo:{' '}
                    {marginTop
                      ? marginTop
                      : (fontSize || headingDefaultFontSize) *
                        defaultHeadingMgTop}
                    px
                  </Typography>
                  <Slider
                    aria-labelledby={`heading${i}__mg-top`}
                    onChange={this.handleSlider(i, 'marginTop')}
                    max={150}
                    step={5}
                    // In case the margin is not explicitly defined, we'll use
                    // the font size and multiply it by the default margin top
                    // (which is joined with a `em` unit)
                    value={
                      marginTop
                        ? marginTop
                        : (fontSize || headingDefaultFontSize) *
                          defaultHeadingMgTop
                    }
                  />
                  <Typography variant="caption">
                    Nota: o valor padrão será 1.5x o tamanho da fonte.
                  </Typography>
                </PropertyWrapper>
                <PropertyWrapper>
                  <Typography id={`heading${i}__mg-bottom`}>
                    Margem abaixo:{' '}
                    {marginBottom
                      ? marginBottom
                      : (props.propertyName === 'headingsLg'
                          ? props.theme.fontSizeLg
                          : props.theme.fontSize) * defaultHeadingMgBottom}
                    px
                  </Typography>
                  <Slider
                    aria-labelledby={`heading${i}__mg-bottom`}
                    onChange={this.handleSlider(i, 'marginBottom')}
                    max={150}
                    step={5}
                    // The default margin bottom is based on a `rem` unit
                    // therefore, we multiply it by the theme's fontSize
                    value={
                      marginBottom
                        ? marginBottom
                        : (props.propertyName === 'headingsLg'
                            ? props.theme.fontSizeLg
                            : props.theme.fontSize) * defaultHeadingMgBottom
                    }
                  />
                  <Typography variant="caption">
                    Nota: o valor padrão será 1.5x o tamanho da fonte.
                  </Typography>
                </PropertyWrapper>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
        <div style={{ textAlign: 'right', marginTop: '.5rem' }}>
          {props.headings.length > 0 ? (
            <Button color="secondary" onClick={this.changeHeadingsNumber(true)}>
              Deletar
            </Button>
          ) : null}
          {props.headings.length < 6 ? (
            <Button color="primary" onClick={this.changeHeadingsNumber()}>
              Adicionar
            </Button>
          ) : null}
        </div>
      </>
    );
  }
}

export default HeadingsEditor;
