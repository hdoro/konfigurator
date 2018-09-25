import { createStyles, IconButton, Theme, withStyles, WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/EditRounded";
import HomeIcon from "@material-ui/icons/HomeRounded";
import SpellcheckIcon from "@material-ui/icons/SpellcheckRounded";
import { Link } from "@reach/router";
import * as React from "react";

const styles = (theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  spacer: theme.mixins.toolbar,
})

export const Header: React.SFC<WithStyles<typeof styles>> = props => {
  return (
    <AppBar position="absolute" className={props.classes.appBar}>
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          noWrap={true}
          style={{ flexGrow: 1 }}
        >
          <Link to="/" style={{ color: "inherit", textDecoration: 'none' }}>
            Konfigurator3000
          </Link>
        </Typography>
        <div>
          <Link to="/editor" style={{ color: "inherit" }}>
            <IconButton color="inherit">
              <EditIcon />
            </IconButton>
          </Link>
          <Link to="/export" style={{ color: "inherit" }}>
            <IconButton color="inherit">
              <SpellcheckIcon />
            </IconButton>
          </Link>
          <Link to="/" style={{ color: "inherit" }}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.displayName = "Header";

export default withStyles(styles, { withTheme: true })(Header);;
