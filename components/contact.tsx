import React, { useState } from "react";
import classes from "./contact.module.scss";
import Input from "./ui/input";
import Button from "./ui/button";
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
import { SiDevdotto } from "react-icons/si";
import Textarea from "./ui/textarea";
import { useToasts } from "react-toast-notifications";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }: ContactProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    const data = { name, email, message };

    try {
      const res: Response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonData = await res.json();

      if (res.status == 200) {
        addToast(jsonData.message, {
          appearance: "success",
          autoDismiss: true,
        });
        clearForm();
      } else {
        addToast(jsonData.error || "Something went wrong!", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } catch (err) {
      addToast("Something went wrong!", {
        appearance: "error",
        autoDismiss: true,
      });
      console.error("Error occurred during sending email.", err);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className={`${classes.contactSection} bg semi-light`} id={id}>
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Contact me</h2>
          <h3 className="subtitle">Get in touch</h3>
        </div>

        <div className={classes.content}>
          <div className={classes.formContainer}>
            <h4 className={classes.areaLabel}>Drop a mail</h4>
            <form onSubmit={submitHandler}>
              <Input
                value={name}
                onChange={changeHandler}
                type="text"
                name="name"
                placeholder="Name"
                required
              ></Input>
              <Input
                value={email}
                onChange={changeHandler}
                type="email"
                name="email"
                placeholder="Email"
                required
              ></Input>
              <Textarea
                value={message}
                onChange={changeHandler}
                name="message"
                placeholder="Message..."
                rows={4}
                style={{ whiteSpace: "pre-wrap" }}
                required
              ></Textarea>
              <div className={classes.submitBtn}>
                <Button type="submit" loading={loading} disabled={loading}>
                  {!loading && "Send Message"}
                  {loading && "Sending Message"}
                </Button>
              </div>
            </form>
          </div>

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
