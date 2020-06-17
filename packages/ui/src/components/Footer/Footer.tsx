import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import UseAnimations from "react-useanimations";

import {useTranslation} from "@sentrei/common/i18n";
import Copyright from "@sentrei/ui/components/Copyright";
import Link from "@sentrei/ui/components/Link";

import FooterStyles from "./FooterStyles";

export default function Footer(): JSX.Element {
  const classes = FooterStyles();
  const {t} = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container justify="space-evenly">
          <Grid item spacing={3} xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("footer.product")}
            </Typography>
            <MuiLink href="https://github.com/sentrei/sentrei/releases">
              <Typography gutterBottom>{t("footer.releases")}</Typography>
            </MuiLink>
          </Grid>
          <Grid item spacing={3} xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("footer.legal")}
            </Typography>
            <Link href="/privacy">
              <Typography gutterBottom>{t("footer.privacy")}</Typography>
            </Link>
            <Link href="/terms">
              <Typography gutterBottom>{t("footer.terms")}</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              {t("footer.social")}
            </Typography>
            <Grid container direction="row" spacing={3}>
              <Grid item>
                <MuiLink href="https://github.com/sentrei/sentrei">
                  <Avatar aria-label="github" variant="rounded">
                    <UseAnimations animationKey="github" />
                  </Avatar>
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink href="https://linkedin.com/company/sentrei">
                  <Avatar aria-label="linkedin" variant="rounded">
                    <UseAnimations animationKey="linkedin" />
                  </Avatar>
                </MuiLink>
              </Grid>
              <Grid item>
                <MuiLink href="https://twitter.com">
                  <Avatar aria-label="twitter" variant="rounded">
                    <UseAnimations animationKey="twitter" />
                  </Avatar>
                </MuiLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="space-evenly" />
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}
