import React, { useState } from 'react'
import classes from './contact.module.scss'
import {MdEmail, MdLocationOn, MdPhone} from 'react-icons/md'
import {ImFacebook2} from 'react-icons/im'
import {SiGithub, SiInstagram, SiLinkedin, SiTwitter} from 'react-icons/si'
import Input from './ui/input'
import Button from './ui/button'

const Contact = (props) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const changeHandler = (event) => {
    event.preventDefault()
    const {name, value} = event.target
    
    switch (name) {
      case 'fullName':
        setFullName(value)
        break
      case 'email':
        setEmail(value)
        break;
      case 'subject':
        setSubject(value)
        break
      case 'message':
        setMessage(value)
        break
    }
  }

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(fullName, email, subject, message);
    clearForm();
  }

  const clearForm = () => {
    setFullName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section className={classes.contactSection} id={props.id}>
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Contact me</h2>
          <h3 className="subtitle">Get in touch</h3>
        </div>
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
            <div className={classes.socialContainer}>
              <a href="https://www.linkedin.com/in/mazedul-islam/" target="blank"><SiLinkedin className={classes.socialBtn} /></a>
              <a href="https://github.com/mazid1" target="blank"><SiGithub className={classes.socialBtn} /></a>
              <a href="https://www.facebook.com/m.mazedul.islam.m" target="blank"><ImFacebook2 className={classes.socialBtn} /></a>
              <a href="https://twitter.com/mazid_csedu" target="blank"><SiTwitter className={classes.socialBtn} /></a>
              <a href="https://www.instagram.com/the_mzd/" target="blank"><SiInstagram className={classes.socialBtn} /></a>
            </div>
          </div>
          <div className={classes.rightContent}>
            <form onSubmit={submitHandler}>
              <Input value={fullName} onChange={changeHandler} inputtype="input" type="text" name="fullName" placeholder="Name" required></Input>
              <Input value={email} onChange={changeHandler} inputtype="input" type="email" name="email" placeholder="Email" required></Input>
              <Input value={subject} onChange={changeHandler} inputtype="input" type="text" name="subject" placeholder="Subject" required></Input>
              <Input value={message} onChange={changeHandler} inputtype="textarea" name="message" placeholder="Message..." required></Input>
              <div className={classes.submitBtn}>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
