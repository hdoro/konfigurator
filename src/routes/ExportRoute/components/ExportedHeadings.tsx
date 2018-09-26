import * as React from 'react';
import { IUserTheme } from '../../../RootContainer';
import {
  displayHeadingLineHeight,
  displayHeadingMarginBottom,
  displayHeadingMarginTop,
  displayHeadingSize,
} from '../../../utils/styleCalculations';
import { TDisplayHeadingPropertyValue } from '../../../utils/types';
import {
  CategoryWrapper,
  ExportedList,
  ExportedListItem,
  PropertyWrapper,
} from './exportComponents';

export interface IExportedHeadingsProps {
  theme: IUserTheme;
}

interface IHeadingProperties {
  name: string;
  returnFunction: TDisplayHeadingPropertyValue;
}

const headingProperties: IHeadingProperties[] = [
  { name: 'font-size', returnFunction: displayHeadingSize },
  { name: 'line-height', returnFunction: displayHeadingLineHeight },
  { name: 'margin-top', returnFunction: displayHeadingMarginTop },
  { name: 'margin-bottom', returnFunction: displayHeadingMarginBottom },
];

export const ExportedHeadings: React.SFC<IExportedHeadingsProps> = props => {
  const { theme } = props;
  return (
    <>
      <h2>Cabeçalhos</h2>
      {theme.headings.map((h, i) => (
        <CategoryWrapper key={`heading${i}`}>
          <h3>Cabeçalho {i + 1}</h3>
          <PropertyWrapper>
            <div>
              <h4>Telas pequenas</h4>
              <ExportedList>
                {headingProperties.map(p => (
                  <ExportedListItem key={p.name} name={p.name}>
                    {p.returnFunction(h, i, theme)}
                  </ExportedListItem>
                ))}
              </ExportedList>
            </div>
            <div>
              <h4>Telas Grandes</h4>
              <ExportedList>
                {headingProperties.map(p => (
                  <ExportedListItem key={p.name} name={p.name}>
                    {p.returnFunction(theme.headingsLg[i] || h, i, theme)}
                  </ExportedListItem>
                ))}
              </ExportedList>
            </div>
          </PropertyWrapper>
        </CategoryWrapper>
      ))}
    </>
  );
};

export default ExportedHeadings;
