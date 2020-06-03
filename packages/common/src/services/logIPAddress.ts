import firebase, {functions} from "@sentrei/common/utils/firebase";

const logIPAddress = async (): Promise<
  firebase.functions.HttpsCallableResult
> => {
  return functions.httpsCallable("logIPAddress")();
};

export default logIPAddress;
