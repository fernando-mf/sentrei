/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

interface ScreenPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function ScreenPanel(props: ScreenPanelProps): JSX.Element {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
