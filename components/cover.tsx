import React, { useEffect, useState } from 'react'
import classes from './cover.module.scss'
import Typist from 'react-typist'

const myTitles = [
  'Software Engineer',
  'Web Developer',
  'Fullstack Developer'
]

const typistContents = myTitles.map((item, idx) => {
  return <div className={classes.inline} key={idx}>
    <span> {item}</span>
    <Typist.Backspace count={item.length} delay={1000}></Typist.Backspace>
  </div>
})

const Cover: React.FC = () => {
  const [doType, setDoType] = useState(true);

  useEffect(() => {
    setDoType(true);
  }, [doType])

  return (
    <section className={classes.cover}>
      <div className={`container ${classes.coverContent}`}>
        <div className={classes.text1}>Hello, my name is</div>
        <div className={classes.text2}>Mazedul Islam</div>
        <div className={classes.text3}>And I'm a
          {doType ? <Typist className={classes.inline} onTypingDone={() => setDoType(false)}>{typistContents}</Typist> : ''}
        </div>
      </div>
    </section>
  )
}

export default Cover
