import {IncomingWebhook} from "@slack/webhook";
import * as functions from "firebase-functions";

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

const notifyNewSignup = functions.auth.user().onCreate(event => {
  const user = event.email;
  (async (): Promise<void> => {
    await webhook.send({
      text: `New Signup from ${user}`,
    });
  })();
});

export default notifyNewSignup;
