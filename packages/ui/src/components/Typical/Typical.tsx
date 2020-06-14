import React from "react";
import {useInView} from "react-intersection-observer";
import {useSpring, animated} from "react-spring";

import Typist from "react-typist";

import Props from "@sentrei/common/interfaces/Typical";

import TypicalStyles from "./TypicalStyles";

export default function CustomTypical({
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  const classes = TypicalStyles();

  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    setCount(1);
  }, [count]);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const props = useSpring({opacity: inView ? 1 : 0});

  return (
    <animated.span ref={ref} style={props} className={classes.spring}>
      {count && (
        <Typist
          avgTypingDelay={90}
          stdTypingDelay={30}
          startDelay={1000}
          onTypingDone={(): void => setCount(0)}
          className={classes.typical}
        >
          <span>{typicalOne}</span>
          <Typist.Backspace count={typicalOne.length} delay={900} />
          <span>{typicalTwo}</span>
          <Typist.Backspace count={typicalTwo.length} delay={900} />
          <span>{typicalThree}</span>
          <Typist.Backspace count={typicalThree.length} delay={3000} />
        </Typist>
      )}
    </animated.span>
  );
}
