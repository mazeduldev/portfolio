import React from "react";
import classes from "./portfolio.module.scss";
import Button from "./ui/button";
import Card from "./ui/card";
import Image from "next/image";

const Portfolio = (props) => {
  return (
    <section id={props.id} className={`bg ${classes.starDark}`}>
      <div className={classes.background}></div>
      <div className={classes.midground}></div>
      <div className={classes.foreground}></div>

      <div className={classes.portfolioContainer}>
        <div className="title-container dark">
          <h2 className="title">Portfolio</h2>
          <h3 className="subtitle">My works</h3>
        </div>
        <div className={classes.content}>
          <Card>
            <Image
              src="/images/timeline_collage.png"
              alt="timeline"
              width={300}
              height={200}
              layout="intrinsic"
              className={classes.cardImage}
            />
            <div className={classes.cardBody}>
              <h5 className={classes.cardTitle}>Vertical Timeline</h5>
              <p className={classes.cardDescription}>
                Angular material theme supported minimalist's vertical timeline
                library for Angular applications.
              </p>
              <div className={classes.cardTagContainer}>
                <div className={classes.tag}>angular</div>
                <div className={classes.tag}>angular-material</div>
              </div>
              <div className={classes.cardButtonContainer}>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://github.com/mazid1/ngx-mzd-timeline"
                    target="blank"
                  >
                    Source Code
                  </a>
                </Button>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://mazid1.github.io/ngx-mzd-timeline/"
                    target="blank"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <Image
              src="/images/timeline_collage.png"
              alt="timeline"
              width={300}
              height={200}
              layout="intrinsic"
              className={classes.cardImage}
            />
            <div className={classes.cardBody}>
              <h5 className={classes.cardTitle}>Vertical Timeline</h5>
              <p className={classes.cardDescription}>
                Angular material theme supported minimalist's vertical timeline
                library for Angular applications.
              </p>
              <div className={classes.cardTagContainer}>
                <div className={classes.tag}>angular</div>
                <div className={classes.tag}>angular-material</div>
              </div>
              <div className={classes.cardButtonContainer}>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://github.com/mazid1/ngx-mzd-timeline"
                    target="blank"
                  >
                    Source Code
                  </a>
                </Button>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://mazid1.github.io/ngx-mzd-timeline/"
                    target="blank"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <Image
              src="/images/timeline_collage.png"
              alt="timeline"
              width={300}
              height={200}
              layout="intrinsic"
              className={classes.cardImage}
            />
            <div className={classes.cardBody}>
              <h5 className={classes.cardTitle}>Vertical Timeline</h5>
              <p className={classes.cardDescription}>
                Angular material theme supported minimalist's vertical timeline
                library for Angular applications.
              </p>
              <div className={classes.cardTagContainer}>
                <div className={classes.tag}>angular</div>
                <div className={classes.tag}>angular-material</div>
              </div>
              <div className={classes.cardButtonContainer}>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://github.com/mazid1/ngx-mzd-timeline"
                    target="blank"
                  >
                    Source Code
                  </a>
                </Button>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://mazid1.github.io/ngx-mzd-timeline/"
                    target="blank"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <Image
              src="/images/timeline_collage.png"
              alt="timeline"
              width={300}
              height={200}
              layout="intrinsic"
              className={classes.cardImage}
            />
            <div className={classes.cardBody}>
              <h5 className={classes.cardTitle}>Vertical Timeline</h5>
              <p className={classes.cardDescription}>
                Angular material theme supported minimalist's vertical timeline
                library for Angular applications.
              </p>
              <div className={classes.cardTagContainer}>
                <div className={classes.tag}>angular</div>
                <div className={classes.tag}>angular-material</div>
              </div>
              <div className={classes.cardButtonContainer}>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://github.com/mazid1/ngx-mzd-timeline"
                    target="blank"
                  >
                    Source Code
                  </a>
                </Button>
                <Button classes={classes.cardButton}>
                  <a
                    href="https://mazid1.github.io/ngx-mzd-timeline/"
                    target="blank"
                  >
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
