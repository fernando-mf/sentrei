import * as functions from "firebase-functions";

const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!\n\n");
});

export default helloWorld;
