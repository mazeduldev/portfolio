import React from "react";
import classes from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <section className={classes.footerContainer + " bg dark"}>
      Made with &hearts; by <a href="#">Mazedul Islam</a>
    </section>
  );
};

export default Footer;
