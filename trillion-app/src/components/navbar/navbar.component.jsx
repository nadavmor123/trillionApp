import React, { useState, useEffect } from "react";
import { Button, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hamburger from "../../images/hamburger.png";
import "./navbar.style.scss";

const NavBar = () => {
  const items = [
    { name: "home", label: "Home", path: "" },
    { name: "about", label: "About", path: "about" },
  ];

  const [toggle, setToggle] = React.useState({
    anchor: "left",
    isOpened: false,
  });

  const toggleDrawer = function (state) {
    setToggle(state);
  };

  const handleToggle = function () {
    toggleDrawer({
      anchor: "left",
      isOpened: !toggle.isOpened,
    });
  };

  useEffect(() => {}, []);

  return (
    <div className="navbar-content">
      <Button onClick={handleToggle}>
        <img src={Hamburger} />
      </Button>
      <Drawer
        anchor={toggle.anchor}
        open={toggle["isOpened"]}
        onClose={handleToggle}
      >
        <div className="navbar-bottons">
          <List disablePadding dense>
            {items.map(({ label, name, path, ...rest }) => (
              <ListItem key={name} button {...rest}>
                <ListItemText>
                  <Link to={"/" + path}>
                    <div className="navbar-link">{label}</div>
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
