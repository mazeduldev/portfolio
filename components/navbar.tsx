import React, { useState } from "react";
import classes from "./navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowUp, FaBars } from "react-icons/fa";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Drawer from "./drawer";

const Navbar: React.FC = () => {
  const router = useRouter();
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

  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const linkTitles = [
    { display: "Home", url: { pathname: "/", hash: "#home" } },
    { display: "Portfolio", url: { pathname: "/", hash: "#portfolio" } },
    { display: "Experience", url: { pathname: "/", hash: "#experience" } },
    { display: "About", url: { pathname: "/", hash: "#about" } },
    { display: "Contact", url: { pathname: "/", hash: "#contact" } },
  ];

  const navLinks = linkTitles.map((link) => {
    return (
      <li className={classes.menuItem} key={link.display}>
        <Link href={link.url}>{link.display}</Link>
      </li>
    );
  });

  const drawerNavLinks = linkTitles.map((link) => {
    return (
      <Link href={link.url} key={link.display} passHref>
        <a className={classes.menuItem} onClick={toggleDrawer}>
          {link.display}
        </a>
      </Link>
    );
  });

  return (
    <>
      <a onClick={scrollToTop} className={`${classes.scrollUpBtn} ${show}`}>
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
