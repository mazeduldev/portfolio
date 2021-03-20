import React from 'react'
import classes from './contact.module.scss'
import {MdEmail, MdLocationOn, MdPhone} from 'react-icons/md'

const Contact = () => {
  return (
    <section>
      <div className="container">
        <h2 className={classes.title}>Contact me</h2>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <address className={classes.infoContainer}>
              <MdEmail className={classes.icon} /> <a className={classes.infoText} href="mailto:mazidmailbox@gmail.com">mazidmailbox@gmail.com</a>
            </address>
            <div className={classes.infoContainer}>
              <MdPhone className={classes.icon} /> <a className={classes.infoText} href="tel:+8801521252696">+880 1521-252696</a>
            </div>
            <div className={classes.infoContainer}>
              <MdLocationOn className={classes.icon} /> <span className={classes.infoText}>House# 1359, Avenue# 11<br/>Mirpur DOHS, Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className={classes.rightContent}>
            Right
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
