import {IncomingWebhook} from "@slack/webhook";
import * as functions from "firebase-functions";

const config = functions.config().env;

const webhook = new IncomingWebhook(config.slack.url);

const notifyBilling = functions.pubsub
  .topic(`sentrei-${config.environment}-billing`)
  .onPublish(event => {
    const pubSubMessage = event.data;
    (async (): Promise<void> => {
      await webhook.send({
        text: `${pubSubMessage}`,
      });
    })();
  });

export default notifyBilling;
