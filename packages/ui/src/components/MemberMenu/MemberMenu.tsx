import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";

import {deleteSpace} from "@sentrei/common/services/spaces";

import Props from "@sentrei/common/types/components/MemberMenu";
import MemberDialog from "@sentrei/ui/components/MemberDialog";

export default function MemberMenu({
  anchorEl,
  open,
  onClose,
  collection,
  id,
  userId,
}: Props): JSX.Element {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setDialogOpen(true);
  };

  const handleClose = (): void => {
    setDialogOpen(false);
  };

  const handleDelete = (): void => {
    deleteSpace(id);
  };

  return (
    <Menu
      id="member-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={handleClickOpen}>
        <ListItem button onClick={handleDelete}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Quit Space" />
        </ListItem>
      </MenuItem>
      <MemberDialog
        open={dialogOpen}
        onClose={handleClose}
        collection={collection}
        id={id}
        userId={userId}
      />
    </Menu>
  );
}
