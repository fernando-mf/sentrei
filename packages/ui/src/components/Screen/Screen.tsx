/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import React from "react";

import ScreenPanel from "@sentrei/ui/components/ScreenPanel";

function a11yProps(
  index: number,
): {
  id: string;
  "aria-controls": string;
} {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Spacing(): JSX.Element {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ): void => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" component="main">
      <Grid container justify="center" direction="row" spacing={1}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            label="Virtual Workspace"
            icon={<HomeWorkIcon />}
            {...a11yProps(0)}
          />
          <Tab label="Share Love" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab
            label="View Analytics"
            icon={<AssessmentIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </Grid>
      <ScreenPanel value={value} index={0}>
        Item One
      </ScreenPanel>
      <ScreenPanel value={value} index={1}>
        Item Two
      </ScreenPanel>
      <ScreenPanel value={value} index={2}>
        Item Three
      </ScreenPanel>
    </Container>
  );
}
