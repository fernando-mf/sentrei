import {IncomingWebhook} from "@slack/webhook";
import * as functions from "firebase-functions";

const config = functions.config().env;

const webhook = new IncomingWebhook(config.slack.notifySignup);

const notifySignup = functions.auth.user().onCreate(event => {
  const user = event.email;
  (async (): Promise<void> => {
    await webhook.send({
      text: `Environment: ${config.environment}\nSignup: ${user}`,
    });
  })();
});

export default notifySignup;
