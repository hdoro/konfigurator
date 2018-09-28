import * as React from 'react';
import { IUserTheme } from '../../../RootContainer';
import {
  CategoryWrapper,
  ExportedList,
  ExportedListItem,
} from './exportComponents';

export interface IExportedBasicProps {
  theme: IUserTheme;
}

export const ExportedFamily: React.SFC<IExportedBasicProps> = props => {
  const { theme } = props;
  const defaultFontFamily = "Systems' default font families";
  return (
    <CategoryWrapper>
      <h3>Família da fonte</h3>
      <ExportedList>
        <ExportedListItem name="Corpo de texto">
          {theme.fontFamilyBody || defaultFontFamily}
        </ExportedListItem>
        <ExportedListItem name="Cabeçalhos">
          {theme.fontFamilyHeading || theme.fontFamilyBody || defaultFontFamily}
        </ExportedListItem>
      </ExportedList>
    </CategoryWrapper>
  );
};

ExportedFamily.displayName = 'ExportedFamily';

export default ExportedFamily;
