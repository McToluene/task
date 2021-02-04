import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { PeopleAltOutlined, PrintOutlined } from "@material-ui/icons/";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button component={Link} to="/customerexperience">
              <ListItemIcon>
                <PeopleAltOutlined />
              </ListItemIcon>
              <ListItemText primary="Customer Experience" />
            </ListItem>
            <ListItem button component={Link} to="/sales">
              <ListItemIcon>
                <PrintOutlined />
              </ListItemIcon>
              <ListItemText primary="Sales" />
            </ListItem>
          </List>
        </div>
      </Box>
    </Container>
  );
};

export default Home;
