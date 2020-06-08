/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

type DocWithSnapshot<T> = T & {
  snap: firebase.firestore.DocumentSnapshot;
};

interface GetAction<T> {
  data: Promise<DocWithSnapshot<T>[]>;
  replace?: boolean;
}

function useLoadMore<T>(limit = 10): any {
  const [getFn, get] = React.useState<GetAction<T>>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<firebase.FirebaseError>();
  const [state, setState] = React.useState<T[]>([]);
  const lastVisible = React.useRef<firebase.firestore.DocumentSnapshot>();

  React.useEffect(() => {
    let active = true;

    if (getFn && getFn.replace) {
      setState([]);
    }

    if (getFn && getFn.data) {
      setLoading(true);

      getFn.data
        .then(docs => {
          if (active) {
            const hasMoreItems = docs.length === limit;
            const lastDoc = docs[docs.length - 1];

            lastVisible.current = hasMoreItems ? lastDoc.snap : undefined;

            setState(previous => {
              const data = getFn.replace ? docs : [...previous, ...docs];
              return data;
            });
            setLoading(false);
          }
        })
        .catch(err => {
          if (active) {
            setLoading(false);
            setError(err);
          }
        });
    }

    return (): void => {
      active = false;
    };
  }, [getFn, limit]);

  return {
    error,
    get,
    items: state,
    lastVisible: lastVisible.current,
    loading,
  };
}

export default useLoadMore;
