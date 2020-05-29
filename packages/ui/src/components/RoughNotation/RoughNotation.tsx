import React from "react";
import {useInView} from "react-intersection-observer";
import {RoughNotation} from "react-rough-notation";

import Props from "@sentrei/common/interfaces/RoughNotation";
import Theme from "@sentrei/ui/containers/Theme";

export default function CustomRoughNotation({
  animate = true,
  animationDelay = 0,
  animationDuration = 800,
  color,
  initial = false,
  text,
  type,
}: Props): JSX.Element {
  const [show, setShow] = React.useState(initial);
  const [ref, inView] = useInView({
    threshold: 0,
  });
  React.useEffect(() => {
    setShow(inView);
  }, [inView]);

  return (
    <span ref={ref}>
      <RoughNotation
        animate={animate}
        animationDelay={animationDelay}
        animationDuration={animationDuration}
        color={
          color === "primary"
            ? Theme.palette.primary.main
            : Theme.palette.secondary.main
        }
        show={show}
        type={type}
      >
        {text}
      </RoughNotation>
    </span>
  );
}
