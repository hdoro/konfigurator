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
import {
  TGetHeadingProperty,
  TReturnHeadingPropertyValue,
} from '../../../utils/types';

export interface IHeadingProperty {
  name: 'fontSize' | 'lineHeight' | 'marginTop' | 'marginBottom';
  label: string;
  displayFunction: TGetHeadingProperty;
  valueFunction: TReturnHeadingPropertyValue;
  note?: string;
  min?: number;
  max?: number;
  step?: number;
}

export const headingProperties: IHeadingProperty[] = [
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
