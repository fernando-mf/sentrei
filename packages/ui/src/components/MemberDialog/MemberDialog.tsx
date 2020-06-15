import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Router from "next/router";
import React from "react";

import Props from "@sentrei/common/interfaces/MemberDialog";

import {unfollow} from "@sentrei/common/services/members";

export default function MemberDialog({
  open,
  onClose,
  collection,
  id,
  userId,
}: Props): JSX.Element {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleUnfollow = (): void => {
    unfollow(collection, id, userId);
    Router.reload();
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Are you sure you want to remove yourself from the group?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove your self from the group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleUnfollow} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
