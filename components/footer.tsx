import React from 'react'
import classes from './footer.module.scss'

const Footer = () => {
  return (
    <section className={classes.footerContainer + " bg dark"}>
      Made with &hearts; by <a href="mailto:mazidmailbox@gmail.com">Mazid</a>
    </section>
  )
}

export default Footer
