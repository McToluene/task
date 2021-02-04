import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { HomeOutlined, InfoOutlined, ContactPage, BookOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState({ pathname: "" });
  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    setValue({ pathname: newValue });
  };
  return (
    <Paper elevation={3} className={classes.bottomNav}>
      <BottomNavigation value={value} onChange={handleChange} showLabels={true}>
        <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeOutlined />} />
        <BottomNavigationAction
          component={Link}
          to="/about"
          label="About"
          icon={<InfoOutlined />}
        />
        <BottomNavigationAction
          component={Link}
          to="/contact"
          label="Contact"
          icon={<ContactPage />}
        />
        <BottomNavigationAction component={Link} to="/blog" label="Blog" icon={<BookOutlined />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
