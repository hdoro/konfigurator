import { saveAs } from 'file-saver';
import { js_beautify } from 'js-beautify';
import { IUserTheme } from '../../../../RootContainer';

const generateThemeText = (theme: IUserTheme) => {
  const exportedTheme = `
  export const theme = ${JSON.stringify(theme)};

  export default theme;
  `;
  return js_beautify(exportedTheme, {
    jslint_happy: true,
  });
};

export const saveTheme = (theme: IUserTheme) => (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  const blob = new Blob([generateThemeText(theme)], {
    type: 'text/plain;charset=utf-8',
  });
  saveAs(blob, 'theme.ts');
};
