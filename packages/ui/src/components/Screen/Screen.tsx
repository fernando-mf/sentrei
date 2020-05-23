import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PhoneIcon from "@material-ui/icons/Phone";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import React from "react";

import ScreenStyles from "./ScreenStyles";

export default function Spacing(): JSX.Element {
  const classes = ScreenStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: string,
  ): void => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" component="main">
      <TabContext value={value}>
        <TabList
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Item One" icon={<PhoneIcon />} value="1" />
          <Box p={3} />
          <Tab label="Item Two" icon={<FavoriteIcon />} value="2" />
          <Box p={3} />
          <Tab label="Item Three" icon={<PersonPinIcon />} value="3" />
        </TabList>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Container>
  );
}
