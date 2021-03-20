import React, { useEffect, useState } from 'react'
import Typist from 'react-typist';
import classes from './typing-animation.module.scss'

const TypingAnimation = (props) => {
  const [doType, setDoType] = useState(true)

  useEffect(() => {
    setDoType(true)
  }, [doType])

  const typistContents = props['texts'].map((item, idx) => {
    return <div className={classes.inline} key={idx}>
      <span> {item}</span>
      <Typist.Backspace count={item.length} delay={1000}></Typist.Backspace>
    </div>
  })
  
  return (
    <>
      {doType ? <Typist className={`${classes.inline} ${classes.crimson}`} onTypingDone={() => setDoType(false)}>{typistContents}</Typist> : ''}
    </>
  )
}

export default TypingAnimation
