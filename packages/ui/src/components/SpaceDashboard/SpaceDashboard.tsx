import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";

import SnackbarAction from "@sentrei/common/types/components/SnackbarAction";
import Props from "@sentrei/common/types/components/SpaceDashboard";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpaceCard from "@sentrei/ui/components/SpaceCard";
import SpaceFab from "@sentrei/ui/components/SpaceFab";
import SpaceNone from "@sentrei/ui/components/SpaceNone";

export default function SpaceDashboard({
  data,
  error,
  userId,
}: Props): JSX.Element {
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  React.useEffect(() => {
    if (error) {
      setSnackbar({msg: error.message, type: "error"});
    }
  }, [error]);

  if (data?.length === 0 && !error) {
    return <SpaceNone />;
  }

  return (
    <div>
      <Snackbar action={snackbar} />
      <SpaceFab />
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
