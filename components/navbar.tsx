import React, { useState } from 'react'
import classes from './navbar.module.scss'
import { Link, animateScroll as scroll } from "react-scroll"
import {FaArrowUp} from "react-icons/fa"

const Navbar: React.FC = () => {
  const [show, setShow] = useState("")
  const [transparent, setTransparent] = useState(classes.bgTransparent)

  const showScrollButton = () => setShow(classes.show)

  const hideScrollButton = () => setShow("")

  const makeTransparent = () => setTransparent(classes.bgTransparent)

  const removeTransparency = () => setTransparent("")

  const handleScrolledToTop = () => {
    hideScrollButton()
    makeTransparent()
  }

  const handleAwayFromTop = () => {
    showScrollButton()
    removeTransparency()
  }

  return (
    <>
      <a onClick={scroll.scrollToTop} className={`${classes.scrollUpBtn} ${show}`}>
        <FaArrowUp />
      </a>
      <nav className={`${classes.navContainer} ${transparent}`}>
        <ul className={classes.menu}>
          <Link to="home" activeClass={classes.active} smooth={true} spy={true} offset={-100} onSetActive={handleScrolledToTop} onSetInactive={handleAwayFromTop} className={classes.menuItem}>Home</Link>
          <Link to="portfolio" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Portfolio</Link>
          <Link to="experience" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Experience</Link>
          <Link to="about" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>About</Link>
          <Link to="contact" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Contact</Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
