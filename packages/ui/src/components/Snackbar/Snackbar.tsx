import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import {TransitionProps} from "@material-ui/core/transitions";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function SlideTransition(props: TransitionProps): JSX.Element {
  return <Slide {...props} direction="down" />;
}

interface Props {
  open: boolean;
  message: string;
  severity: "error" | "success" | "info" | "warning";
  onClose: (event: React.SyntheticEvent<Element, Event>) => void;
}

export default function Spacing({
  open,
  message,
  severity,
  onClose,
}: Props): JSX.Element {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
      onClose={onClose}
    >
      <MuiAlert onClose={onClose} variant="filled" severity={severity}>
        {severity}: {message}
      </MuiAlert>
    </Snackbar>
  );
}
