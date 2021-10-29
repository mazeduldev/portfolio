import React, { useState } from "react";
import classes from "./navbar.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUp, FaBars } from "react-icons/fa";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Drawer from "./drawer";

const Navbar: React.FC = () => {
  const [show, setShow] = useState("");
  const [transparent, setTransparent] = useState(classes.bgTransparent);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showScrollButton = () => setShow(classes.show);

  const hideScrollButton = () => setShow("");

  const makeTransparent = () => setTransparent(classes.bgTransparent);

  const removeTransparency = () => setTransparent("");

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < -150) removeTransparency();
      else makeTransparent();

      if (currPos.y < -500) showScrollButton();
      else hideScrollButton();
    },
    [transparent, show]
  );

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const linkTitles = ["home", "portfolio", "experience", "about", "contact"];

  const navLinks = linkTitles.map((title) => {
    return (
      <li className={classes.menuItem} key={title}>
        <Link
          to={title}
          smooth={true}
          spy={true}
          offset={-64}
          activeClass={title !== "home" ? classes.active : ""}
        >
          {`${title[0].toUpperCase()}${title.substring(1)}`}
        </Link>
      </li>
    );
  });

  const drawerNavLinks = linkTitles.map((title) => {
    return (
      <Link
        to={title}
        key={title}
        onClick={toggleDrawer}
        activeClass={classes.active}
        smooth={true}
        spy={true}
        offset={-64}
        className={classes.menuItem}
      >
        {`${title[0].toUpperCase()}${title.substring(1)}`}
      </Link>
    );
  });

  return (
    <>
      <a
        onClick={scroll.scrollToTop}
        className={`${classes.scrollUpBtn} ${show}`}
      >
        <FaArrowUp />
      </a>
      <nav className={`${classes.navContainer} ${transparent}`}>
        <ul className={classes.menu}>{navLinks}</ul>
        <div className={classes.bars} onClick={toggleDrawer}>
          <FaBars className={classes.menuIcon}></FaBars>
        </div>
      </nav>
      <Drawer isOpen={isDrawerOpen} toggle={toggleDrawer}>
        <div className={classes.drawerMenu}>{drawerNavLinks}</div>
      </Drawer>
    </>
  );
};

export default Navbar;
