import {
  createStyles,
  Drawer,
  IconButton,
  Theme,
  Tooltip,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import FormatIcon from '@material-ui/icons/FormatColorTextRounded';
import RestoreIcon from '@material-ui/icons/RestoreFromTrashRounded';
import SpellcheckIcon from '@material-ui/icons/SpellcheckRounded';
import TitleIcon from '@material-ui/icons/TitleRounded';
import { Link } from '@reach/router';
import * as React from 'react';
import { EConfigSpaces, IUserTheme } from '../../../RootContainer';
import {
  NoParamsAny,
  TChangeConfigSpace,
  TInputHandler,
} from '../../../utils/types';

export interface ISidebarProps extends WithStyles<typeof styles> {
  userTheme: IUserTheme;
  changeThemeRoot: TInputHandler;
  activeSpace: EConfigSpaces | undefined;
  changeSpace: TChangeConfigSpace;
  resetTheme: NoParamsAny;
}

export const fixedSidebarWidth = 70;

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: fixedSidebarWidth,
      padding: '10px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    spacer: theme.mixins.toolbar,
    activeIcon: {
      color: theme.palette.primary.main,
      transition: `.${theme.transitions.duration.standard}s ${
        theme.transitions.easing.easeIn
      }`,
    },
    inactiveIcon: {
      color: theme.palette.grey['400'],
      transition: `.${theme.transitions.duration.standard}s ${
        theme.transitions.easing.easeIn
      }`,
    },
  });

export const Sidebar: React.SFC<ISidebarProps> = props => {
  const { classes, changeSpace, activeSpace } = props;
  const availableSpaces = [
    {
      space: EConfigSpaces.typography,
      icon: (isActive: boolean) => (
        <FormatIcon className={isActive ? classes.activeIcon : ''} />
      ),
      title: 'Tipografia básica',
    },
    {
      space: EConfigSpaces.headings,
      icon: (isActive: boolean) => (
        <TitleIcon className={isActive ? classes.activeIcon : ''} />
      ),
      title: 'Cabeçalhos',
    },
  ];
  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <div className={classes.spacer} />
      <div style={{ flex: 1 }}>
        {availableSpaces.map(s => (
          <div key={s.title}>
            <Tooltip title={s.title} placement="right">
              <IconButton onClick={changeSpace(s.space)}>
                {s.icon(activeSpace === s.space)}
              </IconButton>
            </Tooltip>
          </div>
        ))}
      </div>
      <div>
        <Tooltip title="Exportar configurações" placement="right">
          <Link to="/export">
            <IconButton>
              <SpellcheckIcon />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title="Resetar configurações" placement="right">
          <IconButton onClick={props.resetTheme}>
            <RestoreIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Drawer>
  );
};

Sidebar.displayName = 'Sidebar';

export default withStyles(styles, { withTheme: true })(Sidebar);
