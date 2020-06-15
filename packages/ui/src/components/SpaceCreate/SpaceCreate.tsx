/* eslint-disable @typescript-eslint/no-explicit-any */

import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import "@sentrei/common/utils/sentry";
import Typography from "@material-ui/core/Typography";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import {useRouter} from "next/router";

import React from "react";
import "firebase/auth";

import GlobalContext from "@sentrei/common/context/GlobalContext";
import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import {createSpace} from "@sentrei/common/services/spaces";
import {timestamp} from "@sentrei/common/utils/firebase";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpaceForm from "@sentrei/ui/components/SpaceForm";

import SpaceCreateStyles from "./SpaceCreateStyles";

export default function SpaceCreate(): JSX.Element | null {
  const classes = SpaceCreateStyles();
  const {profile, user} = React.useContext(GlobalContext);

  const {push} = useRouter();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  const handleError = (err: Error): void => {
    setSnackbar({msg: err.message, type: "error"});
  };

  const handleFirebaseError = (err: firebase.FirebaseError): void => {
    setSnackbar(firebaseError(err, "space_create"));
  };

  const handleSuccess = (msg: string): void => {
    setSnackbar({msg, type: "success"});
  };

  if (!user || !profile) {
    return null;
  }

  const handleSubmit = async (data: Record<string, any>): Promise<void> => {
    setSnackbar({type: "info", msg: "saving"});

    try {
      await createSpace({
        name: data.name,
        description: data.description,
        photo: data.photo ?? null,
        createdAt: timestamp,
        createdBy: profile,
        createdById: user?.uid,
        memberCount: 0,
        updatedAt: timestamp,
        updatedBy: profile,
        updatedById: user?.uid,
      })
        .then(id => {
          handleSuccess("Success");
          push("/[id]", `/${id}`);
        })
        .catch(err => handleFirebaseError(err));
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Snackbar action={snackbar} />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddToPhotosIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Create Space
        </Typography>
        <Box pb={3} />
        <SpaceForm onSubmit={handleSubmit} />
      </div>
    </Container>
  );
}
