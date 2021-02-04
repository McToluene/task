import React, { FunctionComponent, Fragment } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { ArrowBack } from "@material-ui/icons";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: FunctionComponent = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  let content = null;

  const goBack = () => {
    history.goBack();
  };

  if (location.pathname !== "/home") {
    content = (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ArrowBack onClick={goBack} />
            </IconButton>
            <Typography variant="h6" className={classes.title} component="div">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Header;
