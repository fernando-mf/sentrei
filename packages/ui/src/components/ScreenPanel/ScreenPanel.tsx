import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import React from "react";
import Tilt from "react-parallax-tilt";

import ScreenPanelStyles from "./ScreenPanelStyles";

interface ScreenPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function ScreenPanel(props: ScreenPanelProps): JSX.Element {
  const classes = ScreenPanelStyles();
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grow in={value === index}>
          <Box p={5}>
            <Tilt
              key="ScreenPanel"
              reset
              scale={1.1}
              transitionSpeed={1000}
              className={classes.tilt}
            >
              {children}
            </Tilt>
          </Box>
        </Grow>
      )}
    </div>
  );
}
