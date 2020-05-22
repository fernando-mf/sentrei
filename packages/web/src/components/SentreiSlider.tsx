/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import "@sentrei/web/styles/slider.scss";

import KeioPicture from "@sentrei/web/components/Picture/KeioPicture";

export default function SentreiSlider(props: any): JSX.Element {
  const {sectionTitle} = props;

  return (
    <>
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
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
          <div className="slide">
            <KeioPicture />
          </div>
        </div>
      </div>
    </>
  );
}

SentreiSlider.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
};
