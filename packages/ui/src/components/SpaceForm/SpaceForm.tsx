/* eslint-disable @typescript-eslint/no-explicit-any */

import {Grid, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import React from "react";

import {useForm, Controller} from "react-hook-form";
import * as Yup from "yup";

import Props from "@sentrei/common/interfaces/SpaceForm";

import ImageUpload from "@sentrei/ui/components/ImageUpload";

const SpaceForm = ({onSubmit}: Props): JSX.Element => {
  const SpaceFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string(),
    photo: Yup.string(),
  });

  const {control, register, errors, handleSubmit, setValue, watch} = useForm({
    reValidateMode: "onBlur",
    validationSchema: SpaceFormSchema,
  });

  const photoValue = watch("photo");
  const handlePhoto = (url: string): void => setValue("photo", url);
  React.useEffect(() => {
    register({name: "photo"});
  }, [register]);

  const {back} = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            as={
              <TextField
                autoFocus
                fullWidth
                id="space-name"
                label="Name"
                margin="normal"
                name="name"
                required
                variant="outlined"
                error={!!errors.name}
                inputRef={register}
                helperText={errors.name ? errors.name.message : ""}
                type="text"
              />
            }
            name="name"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            as={
              <TextField
                fullWidth
                multiline
                rows={3}
                id="space-description"
                label="Description"
                margin="normal"
                name="description"
                required
                variant="outlined"
                error={!!errors.description}
                inputRef={register}
                helperText={
                  errors.description ? errors.description.message : ""
                }
                type="text"
              />
            }
            name="description"
            control={control}
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Cover
          </Typography>
          <ImageUpload
            id="add-cover-img"
            img={photoValue}
            onSave={handlePhoto}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Create
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="reset"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={back}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SpaceForm;
