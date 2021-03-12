import React from 'react'
import classes from './navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <nav className={classes.navContainer}>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>Home</li>
        <li className={classes.menuItem}>About</li>
        <li className={classes.menuItem}>Experience</li>
        <li className={classes.menuItem}>Skills</li>
        <li className={classes.menuItem}>Portfolio</li>
        <li className={classes.menuItem}>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
