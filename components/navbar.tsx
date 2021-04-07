import React, { useState } from 'react'
import classes from './navbar.module.scss'
import { Link, animateScroll as scroll } from "react-scroll"
import {FaArrowUp, FaBars} from "react-icons/fa"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Navbar: React.FC = () => {
  const [show, setShow] = useState("")
  const [transparent, setTransparent] = useState(classes.bgTransparent)

  const showScrollButton = () => setShow(classes.show)

  const hideScrollButton = () => setShow("")

  const makeTransparent = () => setTransparent(classes.bgTransparent)

  const removeTransparency = () => setTransparent("")

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) removeTransparency()
    else makeTransparent()

    if (currPos.y < -500) showScrollButton()
    else hideScrollButton()
  }, [transparent, show])

  return (
    <>
      <a onClick={scroll.scrollToTop} className={`${classes.scrollUpBtn} ${show}`}>
        <FaArrowUp />
      </a>
      <nav className={`${classes.navContainer} ${transparent}`}>
        <ul className={classes.menu}>
          <Link to="home" smooth={true} spy={true} offset={-100} className={classes.menuItem}>Home</Link>
          <Link to="portfolio" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Portfolio</Link>
          <Link to="experience" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Experience</Link>
          <Link to="about" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>About</Link>
          <Link to="contact" activeClass={classes.active} smooth={true} spy={true} offset={-100} className={classes.menuItem}>Contact</Link>
        </ul>
        <div className={classes.bars}>
          <FaBars className={classes.menuIcon}></FaBars>
        </div>
      </nav>
    </>
  )
}

export default Navbar
