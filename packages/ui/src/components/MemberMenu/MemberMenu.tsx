import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";

import Props from "@sentrei/common/interfaces/MemberMenu";
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

  return (
    <Menu
      id="member-menu"
      keepMounted
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={handleClickOpen}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Quit Space" />
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
