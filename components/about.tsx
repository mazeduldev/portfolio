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
    <section id={props.id}>
      <div className='container'>
        <div className="title-container light">
          <h2 className="title">About me</h2>
          <h3 className="subtitle">Who I am</h3>
        </div>
        <div className={classes.content}>
          <div className={classes.proPic}>
            <Image
              src="/images/me.jpg"
              alt="Mazid"
              width={400}
              height={400}
              layout="responsive"
              className={classes.rounded}
            />
          </div>
          <div className={classes.description}>
            <div className={classes.descriptionTitle}>
              I'm Mazid and I'm a<br className={classes.br}></br> <TypingAnimation texts={myTitles}></TypingAnimation>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, eius consectetur. Temporibus soluta deserunt quaerat blanditiis nihil sapiente, dolorem illum facilis? Repudiandae deleniti nisi consequatur voluptates harum, quibusdam libero soluta, ex amet doloremque tenetur culpa quas, excepturi eum! Consequuntur ipsam nam vel maiores voluptatibus voluptate pariatur aperiam accusantium, beatae, earum sit. Vitae eaque iusto eius quas corporis! Quia accusamus voluptatem, deserunt quod consequuntur doloremque distinctio atque placeat et molestias corrupti officia totam ratione, inventore fugit.</p>
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
