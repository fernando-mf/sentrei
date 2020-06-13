import {Avatar, Button, Grid, Typography} from "@material-ui/core";
import {AddAPhoto} from "@material-ui/icons";

import React from "react";

import {maxFileSize} from "@sentrei/common/const";
import Props from "@sentrei/common/interfaces/ImageUpload";
import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";

import upload from "@sentrei/common/services/upload";
import firebaseError from "@sentrei/common/utils/firebaseError";

import Snackbar from "@sentrei/ui/components/Snackbar";

import ImageUploadStyles from "./ImageUploadStyles";

const ImageUpload = ({
  hideImg,
  id,
  img,
  label,
  size,
  onSave,
}: Props): JSX.Element => {
  const classes = ImageUploadStyles();
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);

  const uploadPhoto = (fileList: FileList | null): void => {
    if (!fileList) {
      return;
    }

    const file = fileList[0];

    if (file.size > maxFileSize) {
      setSnackbar({
        msg: "file_too_big",
        type: "error",
        log: {
          code: "file_too_big",
          description: "upload",
        },
      });
      return;
    }

    setSnackbar({msg: "Uploading", type: "info"});

    upload(file, "spaces")
      .then(photoURL => {
        onSave(photoURL);
        setSnackbar({msg: "saved", type: "success"});
      })
      .catch(e => setSnackbar(firebaseError(e, "photo_upload")));
  };

  return (
    <Grid container alignItems="center">
      {!img && !hideImg && (
        <Avatar>
          <AddAPhoto />
        </Avatar>
      )}

      {img && !hideImg && (
        <img src={img} alt="photo_uploaded" style={{width: "150px"}} />
      )}

      <input
        accept="image/*"
        style={{display: "none"}}
        id={id || "update-photo"}
        type="file"
        onChange={(e): void => uploadPhoto(e.target.files)}
      />
      <label htmlFor={id || "update-photo"} className={classes.label}>
        <Button color="primary" component="span">
          {label || "photo_update"}
        </Button>
        <br />
        {size && (
          <Typography variant="caption">photo_suggested_size size</Typography>
        )}
      </label>

      <Snackbar action={snackbar} />
    </Grid>
  );
};

export default ImageUpload;
