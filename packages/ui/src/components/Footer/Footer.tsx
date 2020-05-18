/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import Copyright from "@sentrei/ui/components/Copyright";
import Link from "@sentrei/ui/components/Link";

const footers = [
  {
    title: "Company",
    description: [
      {
        title: "About",
        link: "/about",
        target: "",
      },
    ],
  },
  {
    title: "Product",
    description: [
      {
        title: "Product Release Notes",
        link: "/product",
        target: "",
      },
    ],
  },
  {
    title: "Resources",
    description: [
      {
        title: "Github",
        link: "//github.com/sentrei",
        target: "_blank",
      },
    ],
  },
  {
    title: "Legal",
    description: [
      {
        title: "Privacy policy",
        link: "/privacy",
        target: "",
      },
      {
        title: "Terms of use",
        link: "/terms",
        target: "",
      },
    ],
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: "auto",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    },
  }),
);

export default function StickyFooter(): JSX.Element {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      target={item.target}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </footer>
  );
}
