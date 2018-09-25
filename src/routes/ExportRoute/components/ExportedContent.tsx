import * as React from 'react';
import { IUserTheme } from '../../../RootContainer';
import {
  CategoryWrapper,
  ColorDisplay,
  ExportedList,
  ExportedListItem,
  PropertyWrapper,
} from './exportComponents';
import { ExportedBody } from './ExportedBody';
import { ExportedColors } from './ExportedColors';
import { ExportedFamily } from './ExportedFamily';
import { ExportedHeadings } from './ExportedHeadings';

export interface IExportedBasicProps {
  theme: IUserTheme;
}

export const ExportedContent: React.SFC<IExportedBasicProps> = props => {
  const { theme } = props;
  return (
    <>
      <h2>Base do tema</h2>
      <p>
        <strong>Razão do ritmo modular</strong>: {theme.rythmRatio}x
      </p>
      <ExportedBody theme={theme} />
      <ExportedFamily theme={theme} />
      <ExportedColors theme={theme} />
      <ExportedHeadings theme={theme} />
    </>
  );
};

ExportedContent.displayName = 'ExportedContent';

export default ExportedContent;
