import React from "react";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footerContainer + " bg dark"}>
      Made with ❤️ by <a href="#">Mazedul Islam</a>
    </footer>
  );
};

export default Footer;
