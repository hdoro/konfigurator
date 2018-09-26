import {
  displayHeadingSize,
  returnHeadingSize,
  displayHeadingLineHeight,
  returnHeadingLineHeight,
  displayHeadingMarginTop,
  displayHeadingMarginBottom,
  returnHeadingMarginTop,
  returnHeadingMarginBottom,
  returnBodyLineHeight,
  displayBodyLineHeight,
  returnBodyLineHeightLg,
  displayBodyLineHeightLg,
  returnBodyMaxWidth,
  displayBodyMaxWidth,
  returnBodyMargin,
  displayBodyMargin,
} from '../../../utils/styleCalculations';
import {
  TDisplayHeadingPropertyValue,
  TReturnHeadingPropertyValue,
  TDisplayBodyPropertyValue,
  TReturnBodyPropertyValue,
} from '../../../utils/types';

export interface IRegularhemeProperty {
  name: string;
  label: string;
  note?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface IHeadingThemeProperty extends IRegularhemeProperty {
  name: 'fontSize' | 'lineHeight' | 'marginTop' | 'marginBottom';
  displayFunction: TDisplayHeadingPropertyValue;
  valueFunction: TReturnHeadingPropertyValue;
}

export interface IHeadingBodyProperty extends IRegularhemeProperty {
  name:
    | 'body.lineHeight'
    | 'body.lineHeightLg'
    | 'body.maxWidth'
    | 'body.margin';
  displayFunction: TDisplayBodyPropertyValue;
  valueFunction: TReturnBodyPropertyValue;
}

export const bodyProperties: IHeadingBodyProperty[] = [
  {
    name: 'body.lineHeight',
    label: 'Altura da linha',
    max: 4,
    step: 0.05,
    valueFunction: returnBodyLineHeight,
    displayFunction: displayBodyLineHeight,
  },
  {
    name: 'body.lineHeightLg',
    label: 'Altura da linha em telas grandes',
    max: 4,
    step: 0.05,
    valueFunction: returnBodyLineHeightLg,
    displayFunction: displayBodyLineHeightLg,
    note: 'Para usar o valor de telas menores, só arrastar para 0 ;)',
  },
  {
    name: 'body.maxWidth',
    label: 'Largura máxima do parágrafo',
    max: 1000,
    min: 300,
    step: 10,
    valueFunction: returnBodyMaxWidth,
    displayFunction: displayBodyMaxWidth,
  },
  {
    name: 'body.margin',
    label: 'Margem vertical entre parágrafos',
    max: 5,
    step: 0.25,
    valueFunction: returnBodyMargin,
    displayFunction: displayBodyMargin,
  },
];

export const headingProperties: IHeadingThemeProperty[] = [
  {
    name: 'fontSize',
    label: 'Tamanho da fonte',
    max: 80,
    step: 1,
    note:
      'Nota: caso igual a 0, o tamanho seguirá o ritmo geral definido, sendo multiplicado pelo tamanho da fonte.',
    displayFunction: displayHeadingSize,
    valueFunction: returnHeadingSize,
  },
  {
    name: 'lineHeight',
    label: 'Altura da linha',
    max: 4,
    step: 0.05,
    note:
      'Nota: caso igual a 0, o valor padrão será a altura da linha do parágrafo.',
    displayFunction: displayHeadingLineHeight,
    valueFunction: returnHeadingLineHeight,
  },
  {
    name: 'marginTop',
    label: 'Margem no topo',
    max: 150,
    step: 5,
    note: 'Nota: o valor padrão será 1.5x o tamanho da fonte deste parágrafo.',
    displayFunction: displayHeadingMarginTop,
    valueFunction: returnHeadingMarginTop,
  },
  {
    name: 'marginBottom',
    label: 'Margem abaixo',
    max: 150,
    step: 5,
    note:
      'Nota: o valor padrão será 0.5x o tamanho da fonte do corpo do texto.',
    displayFunction: displayHeadingMarginBottom,
    valueFunction: returnHeadingMarginBottom,
  },
];
