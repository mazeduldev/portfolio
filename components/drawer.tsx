import React from "react";
import classes from "./drawer.module.scss";
import { FaTimes } from "react-icons/fa";

interface DrawerProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  toggle,
  children,
}: DrawerProps) => {
  return (
    <aside
      className={`${classes.drawerContainer} bg dark ${
        isOpen ? classes.active : ""
      }`}
    >
      <div className={classes.crossButton} onClick={toggle}>
        <FaTimes></FaTimes>
      </div>
      {children}
    </aside>
  );
};

export default Drawer;
