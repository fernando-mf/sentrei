import ButtonBase from "@material-ui/core/ButtonBase";
import React from "react";

import Props from "@sentrei/common/types/components/Logo";
import Link from "@sentrei/ui/components/Link";

import LogoStyles from "./LogoStyles";

export default function Logo({logo, root = true}: Props): JSX.Element {
  const classes = LogoStyles();

  return (
    <ButtonBase className={classes.logo}>
      <Link href={root ? "/" : "/dashboard"}>{logo}</Link>
    </ButtonBase>
  );
}
