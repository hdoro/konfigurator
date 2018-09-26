import {
  displayHeadingSize,
  displayHeadingLineHeight,
  displayHeadingMarginTop,
  displayHeadingMarginBottom,
  displayBodyLineHeight,
  displayBodyLineHeightLg,
  displayBodyMaxWidth,
  displayBodyMargin,
} from '../../../utils/styleCalculations';
import {
  TDisplayHeadingPropertyValue,
  TDisplayBodyPropertyValue,
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
}

export interface IHeadingBodyProperty extends IRegularhemeProperty {
  name: 'lineHeight' | 'lineHeightLg' | 'maxWidth' | 'margin';
  displayFunction: TDisplayBodyPropertyValue;
}

export const bodyProperties: IHeadingBodyProperty[] = [
  {
    name: 'lineHeight',
    label: 'Altura da linha',
    max: 4,
    step: 0.05,
    displayFunction: displayBodyLineHeight,
  },
  {
    name: 'lineHeightLg',
    label: 'Altura da linha em telas grandes',
    max: 4,
    step: 0.05,
    displayFunction: displayBodyLineHeightLg,
    note: 'Para usar o valor de telas menores, só arrastar para 0 ;)',
  },
  {
    name: 'maxWidth',
    label: 'Largura máxima do parágrafo',
    max: 1000,
    min: 300,
    step: 10,
    displayFunction: displayBodyMaxWidth,
  },
  {
    name: 'margin',
    label: 'Margem vertical entre parágrafos',
    max: 5,
    step: 0.25,
    displayFunction: displayBodyMargin,
  },
];

export const headingProperties: IHeadingThemeProperty[] = [
  {
    name: 'fontSize',
    label: 'Tamanho da fonte',
    max: 80,
    min: 14,
    step: 1,
    displayFunction: displayHeadingSize,
  },
  {
    name: 'lineHeight',
    label: 'Altura da linha',
    max: 4,
    step: 0.05,
    note:
      'Nota: caso igual a 0, o valor padrão será a altura da linha do parágrafo.',
    displayFunction: displayHeadingLineHeight,
  },
  {
    name: 'marginTop',
    label: 'Margem no topo',
    max: 150,
    step: 5,
    note: 'Nota: o valor padrão será 1.5x o tamanho da fonte deste parágrafo.',
    displayFunction: displayHeadingMarginTop,
  },
  {
    name: 'marginBottom',
    label: 'Margem abaixo',
    max: 150,
    step: 5,
    note:
      'Nota: o valor padrão será 0.5x o tamanho da fonte do corpo do texto.',
    displayFunction: displayHeadingMarginBottom,
  },
];
