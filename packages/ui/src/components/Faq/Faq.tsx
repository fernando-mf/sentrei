/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import React from "react";

import Section from "@sentrei/ui/components/Section";

import FaqStyles from "./FaqStyles";

export default function Faq(props: any): JSX.Element {
  const classes = FaqStyles();
  const {
    sectionTitle,
    titleOne,
    bodyOne,
    titleTwo,
    bodyTwo,
    titleThree,
    bodyThree,
  } = props;

  return (
    <>
      <Section title={sectionTitle} subTitle="" />
      <Container maxWidth="md" component="main">
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" className={classes.heading}>
              {titleOne}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{bodyOne}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" className={classes.heading}>
              {titleTwo}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{bodyTwo}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6" className={classes.heading}>
              {titleThree}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{bodyThree}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
      <Section title="" subTitle="" />
    </>
  );
}

Faq.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  titleOne: PropTypes.string.isRequired,
  bodyOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  bodyTwo: PropTypes.string.isRequired,
  titleThree: PropTypes.string.isRequired,
  bodyThree: PropTypes.string.isRequired,
};
