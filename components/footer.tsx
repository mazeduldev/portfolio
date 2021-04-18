import React from "react";
import classes from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <section className={classes.footerContainer + " bg dark"}>
      Made with &hearts; by <a href="#">Mazid</a>
    </section>
  );
};

export default Footer;
