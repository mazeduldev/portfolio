import React from 'react'
import classes from './portfolio.module.scss'
import Card from './ui/card'

const Portfolio = () => {
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="title-container">
          <h2 className="title">Portfolio</h2>
          <h3 className="subtitle">My works</h3>
        </div>
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
