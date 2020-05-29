import React from "react";
import {useInView} from "react-intersection-observer";
import {useSpring, animated} from "react-spring";
import Typical from "react-typical";

import {i18n} from "@sentrei/common/i18n";
import Props from "@sentrei/common/interfaces/Typical";

import TypicalStyles from "./TypicalStyles";

export default function CustomTypical({
  typicalOne,
  typicalTwo,
  typicalThree,
}: Props): JSX.Element {
  const classes = TypicalStyles();
  const typicalDuration = 3000;
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const props = useSpring({opacity: inView ? 1 : 0});

  return (
    <animated.span ref={ref} style={props}>
      <Typical
        key={i18n.language}
        steps={[
          typicalOne,
          typicalDuration,
          typicalTwo,
          typicalDuration,
          typicalThree,
          typicalDuration,
        ]}
        loop={Infinity}
        wrapper="span"
        className={classes.typical}
      />
    </animated.span>
  );
}
