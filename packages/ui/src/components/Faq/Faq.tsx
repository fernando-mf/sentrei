import Container from "@material-ui/core/Container";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";

import Props from "@sentrei/common/types/components/Faq";
import Section from "@sentrei/ui/components/Section";

import FaqStyles from "./FaqStyles";

export default function Faq({
  sectionTitle,
  titleOne,
  bodyOne,
  titleTwo,
  bodyTwo,
  titleThree,
  bodyThree,
}: Props): JSX.Element {
  const classes = FaqStyles();

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
