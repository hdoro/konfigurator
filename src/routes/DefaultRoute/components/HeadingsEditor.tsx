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
import {
  displayHeadingSize,
  returnHeadingSize,
  displayHeadingLineHeight,
  returnHeadingLineHeight,
  displayHeadingMarginTop,
  displayHeadingMarginBottom,
  returnHeadingMarginTop,
  returnHeadingMarginBottom,
} from '../../../utils/styleCalculations';
import { headingProperties } from './themeProperties';

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
                    value={p.valueFunction(h, {
                      theme: props.theme,
                      i,
                      propertyName: props.propertyName,
                    })}
                  />
                  {p.note ? (
                    <Typography variant="caption">{p.note}</Typography>
                  ) : null}
                </PropertyWrapper>
              ))}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
        <div style={{ textAlign: 'right', marginTop: '.5rem' }}>
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
      </>
    );
  }
}

export default HeadingsEditor;
