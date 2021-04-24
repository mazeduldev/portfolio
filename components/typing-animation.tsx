import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import classes from "./typing-animation.module.scss";

interface TypingAnimationProps {
  texts: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  texts,
}: TypingAnimationProps) => {
  const [doType, setDoType] = useState(true);

  useEffect(() => {
    setDoType(true);
  }, [doType]);

  const typistContents = texts.map((item, idx) => {
    return (
      <div className={classes.inline} key={idx}>
        <span> {item}</span>
        <Typist.Backspace count={item.length} delay={2000}></Typist.Backspace>
      </div>
    );
  });

  return (
    <>
      {doType ? (
        <Typist
          className={`${classes.inline} ${classes.animatedText}`}
          onTypingDone={() => setDoType(false)}
        >
          {typistContents}
        </Typist>
      ) : (
        ""
      )}
    </>
  );
};

export default TypingAnimation;
