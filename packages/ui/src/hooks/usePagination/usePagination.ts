/* eslint-disable @typescript-eslint/no-explicit-any */
import {firestore} from "firebase";
import {useReducer, useEffect} from "react";

type StateType = {
  hasMore: boolean;
  items: firestore.DocumentData[];
  after: firestore.QueryDocumentSnapshot | null;
  lastLoaded: firestore.QueryDocumentSnapshot | null;
  loadingMore: boolean;
  limit: number;
  loadingMoreError: null | Error;
  loading: boolean;
  loadingError: null | Error;
};

type Action<K, V = void> = V extends void ? {type: K} : {type: K} & V;

export type ActionType =
  | Action<"LOAD-MORE">
  | Action<
      "LOADED",
      {
        value: firestore.QuerySnapshot;
        limit: number;
      }
    >;

const initialState = {
  hasMore: false,
  after: null,
  limit: 0,
  items: [],
  lastLoaded: null,
  loading: true,
  loadingError: null,
  loadingMore: false,
  loadingMoreError: null,
};

function findIndexOfDocument(
  doc: firestore.QueryDocumentSnapshot,
  items: firestore.DocumentData[],
): number {
  return items.findIndex(item => {
    return item.id === doc.id;
  });
}

function updateItem(
  doc: firestore.QueryDocumentSnapshot,
  items: firestore.DocumentData[],
): void {
  const i = findIndexOfDocument(doc, items);
  // eslint-disable-next-line no-param-reassign
  items[i] = doc;
}

function deleteItem(
  doc: firestore.QueryDocumentSnapshot,
  items: firestore.DocumentData[],
): void {
  const i = findIndexOfDocument(doc, items);
  items.splice(i, 1);
}

function addItem(
  doc: firestore.QueryDocumentSnapshot,
  items: firestore.DocumentData[],
): void {
  const i = findIndexOfDocument(doc, items);
  if (i === -1) {
    items.push(doc);
  }
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "LOADED": {
      const items = [...state.items];
      let isAdding = false;

      action.value.docChanges().forEach(change => {
        if (change.type === "added") {
          isAdding = true;
          addItem(change.doc, items);
        } else if (change.type === "modified") {
          updateItem(change.doc, items);
        } else if (change.type === "removed") {
          deleteItem(change.doc, items);
        }
      });

      const nextLimit = items.length + action.limit;

      const end = items.length < action.limit || nextLimit === state.limit;

      return {
        ...state,
        hasMore: isAdding ? !end : state.hasMore,
        limit: nextLimit,
        loading: false,
        loadingError: null,
        lastLoaded: action.value.docs[action.value.docs.length - 1],
        loadingMore: false,
        items,
      };
    }

    case "LOAD-MORE": {
      return {
        ...state,
        loadingMore: true,
        after: state.lastLoaded,
      };
    }

    default:
      return {...state};
  }
}

interface PaginationOptions {
  limit?: number;
}

export default function usePaginateQuery(
  query: firestore.Query,
  {limit = 25}: PaginationOptions = {},
): any {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fn = query.limit(state.limit || limit);

    const unsubscribe = fn.onSnapshot(snap => {
      dispatch({type: "LOADED", value: snap, limit});
    });

    return (): void => unsubscribe();
  }, [state.after]);

  function loadMore(): void {
    dispatch({type: "LOAD-MORE"});
  }

  return {
    loadingMore: state.loadingMore,
    loadingError: state.loadingError,
    loadingMoreError: state.loadingMoreError,
    loading: state.loading,
    hasMore: state.hasMore,
    items: state.items,
    loadMore,
  };
}
