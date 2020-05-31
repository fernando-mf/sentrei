import {IncomingWebhook} from "@slack/webhook";
import * as functions from "firebase-functions";

const config = functions.config().env;

const webhook = new IncomingWebhook(config.slack.url);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventToBilling = (data: any): JSON => {
  return JSON.parse(Buffer.from(data, "base64").toString());
};

const notifyBilling = functions.pubsub
  .topic(`sentrei-${config.environment}-billing`)
  .onPublish(event => {
    const pubSubMessage = eventToBilling(event.data);
    (async (): Promise<void> => {
      await webhook.send({
        text: `${pubSubMessage}`,
      });
    })();
  });

export default notifyBilling;
