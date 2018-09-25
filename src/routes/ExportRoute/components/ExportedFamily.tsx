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
  return (
    <CategoryWrapper>
      <h3>Família da fonte</h3>
      <ExportedList>
        <ExportedListItem name="Corpo de texto">
          {theme.fontFamilyBody}
        </ExportedListItem>
        <ExportedListItem name="Cabeçalhos">
          {theme.fontFamilyHeading || theme.fontFamilyBody}
        </ExportedListItem>
      </ExportedList>
    </CategoryWrapper>
  );
};

ExportedFamily.displayName = 'ExportedFamily';

export default ExportedFamily;
