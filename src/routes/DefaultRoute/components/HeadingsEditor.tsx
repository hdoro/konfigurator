import {
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Divider,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Slider } from '@material-ui/lab';
import * as React from 'react';
import styled from 'styled-components';
import { IHeadingTypography, IUserTheme } from '../../../RootContainer';
import { TChangeThemeProp } from '../../../utils/types';
import {
  displayHeadingSize,
  displayHeadingLineHeight,
  displayHeadingMarginTop,
  displayHeadingMarginBottom,
} from '../../../utils/styleCalculations';
import { headingProperties } from './themeProperties';

export interface IHeadingsEditorProps {
  theme: IUserTheme;
  headings: IHeadingTypography[];
  changeThemeProperty: TChangeThemeProp;
  propertyName: 'headings' | 'headingsLg';
  title: string;
}

export interface IHeadingsEditorState {
  openedPanels: boolean[];
  currentRythm: number;
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
    currentRythm: 1.25,
  };

  // Sets all font-sizes to their equivalent rythm-based size
  public handleRythmOverride = () => {
    const { headings, changeThemeProperty, propertyName, theme } = this.props;
    const newHeadings: IHeadingTypography[] = headings.map((h, i) => {
      const fontSize =
        Math.pow(this.state.currentRythm, headings.length - i) *
        (propertyName === 'headingsLg' ? theme.fontSizeLg : theme.fontSize);
      console.log(
        i,
        fontSize,
        theme.fontSize,
        Math.pow(this.state.currentRythm, headings.length - i)
      );
      return {
        ...h,
        fontSize,
      };
    });
    changeThemeProperty(propertyName, newHeadings);
  };

  public handleRythmChange: (
    event: React.ChangeEvent<{}>,
    value: number
  ) => void = (e, value) => {
    this.setState({
      currentRythm: +value.toFixed(2),
    });
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
        [headingPropName]: +value.toFixed(2),
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
    const { headings, changeThemeProperty, propertyName, theme } = this.props;
    let newHeadings = [...headings];
    if (isDelete) {
      newHeadings = newHeadings.slice(0, headings.length - 1);
    } else {
      newHeadings = [
        ...newHeadings,
        {
          fontSize: theme.fontSize,
        },
      ];
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
        <PropertyWrapper>
          <Typography id="headings-rythm">
            Opcional: ritmo da escala modular: {state.currentRythm}x
          </Typography>
          <Slider
            aria-labelledby="headings-rythm"
            onChange={this.handleRythmChange}
            max={1.5}
            min={1}
            step={0.05}
            value={state.currentRythm}
          />
          <Button color="secondary" onClick={this.handleRythmOverride}>
            Definir tamanhos segundo ritmo
          </Button>
          <Typography variant="caption" style={{ marginTop: '.5rem' }}>
            <strong>Atenção:</strong> essa ação é irreversível e irá modificar
            por completo o tamanho dos cabeçalhos de {props.title.toLowerCase()}
            !
          </Typography>
        </PropertyWrapper>
        {props.headings.map((h, i) => (
          <ExpansionPanel
            key={`heading-${i}`}
            expanded={state.openedPanels[i]}
            onChange={this.handlePanel(i)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Cabeçalho {i + 1}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexWrap: 'wrap' }}>
              {headingProperties.map(p => (
                <PropertyWrapper key={p.name}>
                  <Typography id={`heading${i}__${p.name}`}>
                    {p.label}: {p.displayFunction(h, i, props.theme)}
                  </Typography>
                  <Slider
                    aria-labelledby={`heading${i}__${p.name}`}
                    onChange={this.handleSlider(i, p.name)}
                    max={p.max}
                    min={p.min}
                    step={p.step}
                    value={h[p.name] || 0}
                  />
                  {p.note ? (
                    <Typography variant="caption">{p.note}</Typography>
                  ) : null}
                </PropertyWrapper>
              ))}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
        <div style={{ textAlign: 'right', margin: '.5rem' }}>
          {props.headings.length > 4 ? (
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
        <Divider />
      </>
    );
  }
}

export default HeadingsEditor;
