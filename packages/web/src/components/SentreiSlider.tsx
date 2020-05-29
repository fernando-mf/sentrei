import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "@sentrei/web/styles/slider.scss";
import {useInView} from "react-intersection-observer";

import logEvent from "@sentrei/common/utils/logEvent";
import KeioPicture from "@sentrei/web/components/Picture/KeioPicture";
import UclPicture from "@sentrei/web/components/Picture/UclPicture";

interface Props {
  sectionTitle: string;
}

export default function SentreiSlider({sectionTitle}: Props): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  React.useEffect(() => {
    if (inView) {
      logEvent("landing", {section: "slider"});
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <Box p={4} />
      <Container maxWidth="md">
        <Typography align="center" variant="h4">
          {sectionTitle}
        </Typography>
      </Container>
      <Box p={3} />
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <UclPicture />
          </div>
        </div>
      </div>
    </div>
  );
}
