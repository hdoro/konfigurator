import {
  createStyles,
  Divider,
  Drawer,
  IconButton,
  Theme,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import * as React from 'react';
import { TChangeConfigSpace } from '../../../utils/types';

export interface IConfigSpaceProps extends WithStyles<typeof styles> {
  title: string;
  isOpen: boolean;
  changeSpace: TChangeConfigSpace;
}

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: 320,
      zIndex: theme.zIndex.drawer - 1,
      [theme.breakpoints.up('md')]: {
        position: 'relative',
      },
    },
    drawerBackdrop: {
      background: 'rgba(0,0,0,.3)',
    },
    header: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
    },
  });

export const ConfigSpace: React.SFC<IConfigSpaceProps> = props => {
  const { classes } = props;
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      BackdropProps={{
        className: classes.drawerBackdrop,
      }}
      open={props.isOpen}
      anchor="left"
      onClose={props.changeSpace()}
    >
      <div className={classes.header}>
        <IconButton onClick={props.changeSpace()}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography style={{ marginLeft: '.5rem' }} variant="subheading">
          {props.title}
        </Typography>
      </div>
      <Divider />
      <div style={{ padding: '1rem' }}>{props.children}</div>
    </Drawer>
  );
};

ConfigSpace.displayName = 'ConfigSpace';

export default withStyles(styles, { withTheme: true })(ConfigSpace);
