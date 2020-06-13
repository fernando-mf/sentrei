import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

import Link from "@sentrei/ui/components/Link";

import SpaceNoneStyles from "./SpaceNoneStyles";

export default function SpaceNone(): JSX.Element {
  const classes = SpaceNoneStyles();

  return (
    <Container maxWidth="md" component="main">
      <Grid
        container
        alignItems="center"
        alignContent="center"
        direction="row"
        justify="center"
        spacing={3}
        className={classes.grid}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            component="h5"
          >
            You have no spaces...
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={3}>
            <Link href="/create">
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                size="medium"
                startIcon={<AddIcon />}
              >
                Create One
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
