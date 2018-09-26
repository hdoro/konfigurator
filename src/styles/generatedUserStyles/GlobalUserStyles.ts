import { createGlobalStyle } from 'styled-components';
import { IUserTheme } from '../../RootContainer';
import { baseUserStyles } from './userStylesConstants';
import { sharedGlobalStyles } from '../sharedGlobalStyles';
import { getUserStyles } from './getUserStyles';

export const GlobalUserStyles = createGlobalStyle`
  ${sharedGlobalStyles}
  ${baseUserStyles}
  ${({ theme }: { theme: IUserTheme }) => getUserStyles(theme)}}
`;
