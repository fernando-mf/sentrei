import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import React from "react";

import Props from "@sentrei/common/types/components/Screen";
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

export default function Screen({
  imgOne,
  imgTwo,
  imgThree,
  labelOne,
  labelTwo,
  labelThree,
}: Props): JSX.Element {
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
          <Tab label={labelOne} icon={<HomeWorkIcon />} {...a11yProps(0)} />
          <Tab label={labelTwo} icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label={labelThree} icon={<AssessmentIcon />} {...a11yProps(2)} />
        </Tabs>
      </Grid>
      <ScreenPanel value={value} index={0}>
        {imgOne}
      </ScreenPanel>
      <ScreenPanel value={value} index={1}>
        {imgTwo}
      </ScreenPanel>
      <ScreenPanel value={value} index={2}>
        {imgThree}
      </ScreenPanel>
    </Container>
  );
}
