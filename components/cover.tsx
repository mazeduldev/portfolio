import React, { useEffect, useState } from 'react'
import classes from './cover.module.scss'
import TypingAnimation from './typing-animation'

const myTitles = [
  'Software Engineer',
  'Web Developer',
  'Fullstack Developer'
]

const Cover: React.FC = () => {
  return (
    <section className={classes.cover}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>And I'm a
          <TypingAnimation texts={myTitles}></TypingAnimation>
        </div>
      </div>
    </section>
  )
}

export default Cover
