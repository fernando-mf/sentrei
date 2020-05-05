import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function NavBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News</Typography>
      </Toolbar>
    </AppBar>
  );
}
