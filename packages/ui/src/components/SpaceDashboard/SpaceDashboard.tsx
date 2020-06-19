import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

import Props from "@sentrei/common/types/components/SpaceDashboard";
import SpaceCard from "@sentrei/ui/components/SpaceCard";
import SpaceNone from "@sentrei/ui/components/SpaceNone";

export default function SpaceDashboard({
  data,
  error,
  userId,
}: Props): JSX.Element {
  if (data?.length === 0 && !error) {
    return <SpaceNone />;
  }

  return (
    <div>
      <Box mb={9}>
        <Typography
          variant="h3"
          align="center"
          color="textSecondary"
          component="h4"
        >
          Your spaces
        </Typography>
      </Box>
      <Container maxWidth="lg" component="main">
        <Grid container alignItems="center" justify="center" spacing={3}>
          {data?.map(space => (
            <Grid item key={space.id} xs={12} sm={6} md={4}>
              <SpaceCard space={space} userId={userId} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
