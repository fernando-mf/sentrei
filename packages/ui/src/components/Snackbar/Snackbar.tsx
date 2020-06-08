import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import {TransitionProps} from "@material-ui/core/transitions";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import {analytics} from "@sentrei/common/utils/firebase";

function SlideTransition(props: TransitionProps): JSX.Element {
  return <Slide {...props} direction="down" />;
}

interface Props {
  action: SnackbarAction | null;
}
export default function Spacing({action}: Props): JSX.Element {
  const [duration, setDuration] = React.useState<number | null>(null);
  const [message, setMessage] = React.useState<string>();

  React.useEffect(() => {
    if (!action) setDuration(null);
  }, [action]);

  React.useEffect(() => {
    setMessage(action?.msg);
  }, [action]);

  React.useEffect(() => {
    if (action?.type === "error" && action.log) {
      analytics().logEvent("exception", {
        ...action.log.opts,
        description: action.log.description,
        msg: action.msg,
      });
    }
  }, [action]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={Boolean(message)}
      autoHideDuration={duration}
      TransitionComponent={SlideTransition}
      onClose={(): void => setMessage(undefined)}
    >
      <MuiAlert variant="filled" severity={action?.type}>
        {action?.type}: {message}
      </MuiAlert>
    </Snackbar>
  );
}
