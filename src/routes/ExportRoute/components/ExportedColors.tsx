import * as React from 'react';
import { IUserTheme } from '../../../RootContainer';
import {
  CategoryWrapper,
  ColorDisplay,
  ExportedList,
  ExportedListItem,
} from './exportComponents';

export interface IExportedBasicProps {
  theme: IUserTheme;
}

export const ExportedColors: React.SFC<IExportedBasicProps> = props => {
  const { theme } = props;
  return (
    <CategoryWrapper>
      <h3>Cores</h3>
      <ExportedList>
        <ExportedListItem name="Corpo de texto">
          <ColorDisplay color={theme.colors.text} />
          {theme.colors.text}
        </ExportedListItem>
        <ExportedListItem name="Cabeçalhos">
          <ColorDisplay color={theme.colors.heading || theme.colors.text} />
          {theme.colors.heading || theme.colors.text}
        </ExportedListItem>
      </ExportedList>
    </CategoryWrapper>
  );
};

ExportedColors.displayName = 'ExportedColors';

export default ExportedColors;
