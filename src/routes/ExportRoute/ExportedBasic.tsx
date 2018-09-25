import * as React from "react";
import styled from "styled-components";
import { IUserTheme } from "../../RootContainer";
import {
  CategoryWrapper,
  ColorDisplay,
  ExportedList,
  ExportedListItem,
  PropertyWrapper
} from "./exportComponents";

export interface IExportedBasicProps {
  theme: IUserTheme;
}

const Container = styled.div``;

export const ExportedBasic: React.SFC<IExportedBasicProps> = props => {
  const { theme } = props;
  return (
    <Container>
      <h2>Base do tema</h2>
      <p>
        <strong>Ritmo da razão modular</strong>: {theme.rythmRatio}x
      </p>
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
    </Container>
  );
};

ExportedBasic.displayName = "ExportedBasic";

export default ExportedBasic;
