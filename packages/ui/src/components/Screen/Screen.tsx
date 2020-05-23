/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";

import ScreenPanel from "@sentrei/ui/components/ScreenPanel";

import ScreenStyles from "./ScreenStyles";

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
  const classes = ScreenStyles();
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number,
  ): void => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" component="main">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
        <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
        <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
      </Tabs>
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
