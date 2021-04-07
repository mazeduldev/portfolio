import React, { useState } from "react";
import classes from "./drawer.module.scss";
import { FaTimes } from "react-icons/fa";

const Drawer = (props) => {
  return (
    <aside className={`${classes.drawerContainer} bg dark ${props.isOpen ? classes.active: ''}`}>
      <div className={classes.crossButton} onClick={props.toggle}>
        <FaTimes></FaTimes>
      </div>
      {props.children}
    </aside>
  );
};

export default Drawer;
