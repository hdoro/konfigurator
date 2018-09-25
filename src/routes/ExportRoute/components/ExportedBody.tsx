import * as React from 'react';
import { IUserTheme } from '../../../RootContainer';
import {
  CategoryWrapper,
  ExportedList,
  ExportedListItem,
  PropertyWrapper,
} from './exportComponents';

export interface IExportedBasicProps {
  theme: IUserTheme;
}

export const ExportedBody: React.SFC<IExportedBasicProps> = props => {
  const { theme } = props;
  return (
    <CategoryWrapper>
      <h3>Corpo de texto</h3>
      <PropertyWrapper>
        <div>
          <h4>Telas pequenas</h4>
          <ExportedList>
            <ExportedListItem name="font-size">
              {theme.fontSize}
              px
            </ExportedListItem>
            <ExportedListItem name="line-height">
              {theme.body.lineHeight * 100}%
            </ExportedListItem>
            <ExportedListItem name="margin">
              {theme.body.margin * theme.fontSize}
              px 0
            </ExportedListItem>
          </ExportedList>
        </div>
        <div>
          <h4>Telas grandes</h4>
          <ExportedList>
            <ExportedListItem name="font-size">
              {theme.fontSizeLg}
              px
            </ExportedListItem>
            <ExportedListItem name="line-height">
              {(theme.body.lineHeightLg || theme.body.lineHeight) * 100}%
            </ExportedListItem>
            <ExportedListItem name="margin">
              {theme.body.margin * theme.fontSizeLg}
              px 0
            </ExportedListItem>
            <ExportedListItem name="max-width">
              {theme.body.maxWidth}
              px
            </ExportedListItem>
          </ExportedList>
        </div>
      </PropertyWrapper>
    </CategoryWrapper>
  );
};

ExportedBody.displayName = 'ExportedBody';

export default ExportedBody;
