import SnackbarAction from "@sentrei/common/interfaces/SnackbarAction";

const firebaseError = (
  err: firebase.FirebaseError,
  action: string,
): SnackbarAction => {
  return {
    type: "error",
    msg: err.message,
    log: {
      code: err.code,
      description: action,
    },
  };
};

export default firebaseError;
