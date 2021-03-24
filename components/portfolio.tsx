import React from 'react'
import classes from './portfolio.module.scss'
import Card from './ui/card'

const Portfolio = () => {
  return (
    <section className={classes.bgDark}>
      <div className="container">
        <h2 className={classes.title}>Portfolio</h2>
        <div className={classes.content}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
