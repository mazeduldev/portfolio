import React from 'react'
import classes from './cover.module.scss'

const Cover: React.FC = () => {
  return (
    <section className={classes.cover}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>And I'm a <span>Software Engineer</span></div>
      </div>
    </section>
  )
}

export default Cover
