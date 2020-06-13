import {Grid, TextField, Typography} from "@material-ui/core";

import React from "react";

import Space from "@sentrei/common/models/Space";

import ImageUpload from "@sentrei/ui/components/ImageUpload";

interface SpaceFormProps {
  data?: Space.Get;
  onSubmit: (data: Space.EditableFields) => void;
}

const SpaceForm = ({data, onSubmit}: SpaceFormProps): JSX.Element => {
  const [name, setName] = React.useState<string>(data?.name || "");
  const [description, setDescription] = React.useState<string>(
    data?.description || "",
  );
  const [photo, setPhoto] = React.useState<string | null>(data?.photo || null);

  const descriptionMax = 1000;
  const valid =
    name.length > 0 &&
    description.length > 0 &&
    description.length <= descriptionMax;

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
      </Grid>
    </form>
  );
};

export default SpaceForm;
