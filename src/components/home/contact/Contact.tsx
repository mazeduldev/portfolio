import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelope,
  FaTwitter,
  FaDev,
} from "react-icons/fa";
import classes from "./Contact.module.scss";
import ContactForm from "./ContactForm";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }: ContactProps) => {
  return (
    <section className={`${classes.contactSection} bg semi-light`} id={id}>
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Contact me</h2>
          <h3 className="subtitle">Get in touch</h3>
        </div>

        <div className={classes.content}>
          <ContactForm />

          <div className={classes.addressContainer}>
            <h4 className={classes.areaLabel}>Get in touch</h4>
            <address className={classes.infoContainer}>
              <FaRegEnvelope className={classes.icon} />{" "}
              <a
                className={classes.infoText}
                href="mailto:mazidmailbox@gmail.com"
              >
                mazidmailbox@gmail.com
              </a>
            </address>
            <div className={classes.infoContainer}>
              <FaMobileAlt className={classes.icon} />{" "}
              <a className={classes.infoText} href="tel:+8801521252696">
                +880 1521-252696
              </a>
            </div>
            <div className={classes.infoContainer}>
              <FaMapMarkerAlt className={classes.icon} />{" "}
              <span className={classes.infoText}>Dhaka, Bangladesh</span>
            </div>
            <div className={classes.socialContainer}>
              <a
                href="https://www.linkedin.com/in/mazedul-islam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/mazid1"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a href="https://dev.to/mazid1" target="_blank" rel="noreferrer">
                <FaDev />
              </a>
              <a
                href="https://twitter.com/mazedul__islam"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.facebook.com/m.mazedul.islam.m"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/mazedul__islam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
