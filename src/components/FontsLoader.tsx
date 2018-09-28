import * as React from 'react';
import { IUserTheme } from '../RootContainer';
import { formatFontName } from '../utils/strings';

export interface IFontsLoaderProps {
  theme: IUserTheme;
}

export const FontsLoader: React.SFC<IFontsLoaderProps> = props => {
  const { theme } = props;
  return (
    <>
      <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=${formatFontName(
          theme.fontFamilyBody
        )}`}
      />
      {theme.fontFamilyHeading ? (
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${formatFontName(
            theme.fontFamilyHeading
          )}`}
        />
      ) : null}
    </>
  );
};

FontsLoader.displayName = 'FontsLoader';

export default FontsLoader;
