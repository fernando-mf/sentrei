import firebase, {functions} from "@sentrei/common/utils/firebase";

const logIPAddress = async (): Promise<
  firebase.functions.HttpsCallableResult
> => {
  return functions.httpsCallable("default-users-setupProfile")();
};

export default logIPAddress;
