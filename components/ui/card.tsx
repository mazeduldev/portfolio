import React from 'react'
import { TiltOptions } from 'vanilla-tilt'
import classes from './card.module.scss'
import Tilt from './tilt'

const Card = () => {
  const tiltOptions: TiltOptions = {
    glare: true,
    "max-glare": 1
  }

  return (
    <Tilt className={classes.card} options={tiltOptions}>
      <div className={classes.content}>
        <h2>Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quo iusto facilis, et laboriosam quia modi ipsum quam doloribus esse facere beatae obcaecati neque hic, quod delectus ab vel soluta corrupti?</p>
      </div>
    </Tilt>
  )
}

export default Card
