import {Grid, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import React from "react";

import Props from "@sentrei/common/interfaces/SpaceForm";

import ImageUpload from "@sentrei/ui/components/ImageUpload";

const SpaceForm = ({data, onSubmit}: Props): JSX.Element => {
  const [name, setName] = React.useState<string>(data?.name || "");
  const [description, setDescription] = React.useState<string>(
    data?.description || "",
  );
  const [photo, setPhoto] = React.useState<string | null>(data?.photo || null);

  const {back} = useRouter();

  const descriptionMax = 1000;

  return (
    <form onSubmit={(): void => onSubmit({description, photo, name})}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={name}
            onChange={(e): void => setName(e.target.value)}
            variant="outlined"
            fullWidth
            id="space-name"
            label="Name"
            name="name"
            required
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={3}
            value={description}
            onChange={(e): void => setDescription(e.target.value)}
            variant="outlined"
            fullWidth
            id="space-description"
            label="Description"
            helperText={`${description.length} / ${descriptionMax}`}
            error={description.length > descriptionMax}
            name="description"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Cover
          </Typography>
          <ImageUpload id="add-cover-img" img={photo} onSave={setPhoto} />
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
