import {useRouter} from "next/router";
import React from "react";

import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";
import Props from "@sentrei/common/interfaces/SpaceDashboard";
import Space from "@sentrei/common/models/Space";
import {listSpaces} from "@sentrei/common/services/spaces";
import firebaseError from "@sentrei/common/utils/firebaseError";
import Snackbar from "@sentrei/ui/components/Snackbar";
import SpaceNone from "@sentrei/ui/components/SpaceNone";
import useLoadMore from "@sentrei/ui/hooks/useLoadMore";

export default function SpaceDashboard({
  limit = 10,
  userId,
}: Props): JSX.Element {
  const [snackbar, setSnackbar] = React.useState<SnackbarAction | null>(null);
  const {error, get, items, loading} = useLoadMore<Space.Snapshot>(limit);

  const {push} = useRouter();

  React.useEffect(() => {
    get({data: listSpaces(undefined, userId, limit)});
  }, [get, limit, userId]);

  React.useEffect(() => {
    if (error) {
      setSnackbar(firebaseError(error, "spaces_list"));
    }
  }, [error]);

  if (items.length !== 0) {
    push("/[id]", `/${items[0].id}`);
  }

  if (items.length === 0 && loading === false) {
    return <SpaceNone />;
  }

  return (
    <div>
      <Snackbar action={snackbar} />
    </div>
  );
}
