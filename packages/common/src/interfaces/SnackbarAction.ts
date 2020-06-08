/* eslint-disable @typescript-eslint/no-explicit-any */

interface SnackbarAction {
  type: "error" | "success" | "info" | "warning" | undefined;
  msg: string;
  log?: {
    code?: string | number;
    description: string;
    opts?: any;
  };
}

export default SnackbarAction;
