import React from 'react'
import classes from './about.module.scss'
import Image from 'next/image'
import TypingAnimation from './typing-animation'

const myTitles = [
  'Software Engineer',
  'Web Developer',
  'Fullstack Developer'
]

const About = (props) => {
  return (
    <section id={props.id} className="bg dark">
      <div className='container'>
        <div className="title-container dark">
          <h2 className="title">About me</h2>
          <h3 className="subtitle">Who I am</h3>
        </div>
        <div className={classes.content}>
          <div className={classes.proPic}>
            <Image
              src="/images/me.jpg"
              alt="Mazid"
              width={350}
              height={350}
              layout="intrinsic"
              className={classes.rounded}
            />
          </div>
          <div className={classes.description}>
            <div className={classes.descriptionTitle}>
              I'm Mazid, <br className={classes.br}></br> <TypingAnimation texts={myTitles}></TypingAnimation>
            </div>
            <p>Experienced Software Engineer with a demonstrated history of working in the computer software industry. Skilled in JavaScript, Angular, ReactJS, Spring-boot, NodeJS, Web Development, Android Development, and Software Design Patterns. Strong engineering professional with a Bachelor of Science focused in Computer Science and Engineering from <a href="https://www.cse.du.ac.bd/">University of Dhaka</a>.</p>
            <a href="/files/resume.pdf" download="Resume__Mohammad_Mazedul_Islam.pdf">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
