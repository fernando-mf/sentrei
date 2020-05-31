/* eslint-disable @typescript-eslint/no-explicit-any */
import {IncomingWebhook} from "@slack/webhook";
import * as functions from "firebase-functions";

const config = functions.config().env;

const webhook = new IncomingWebhook(config.slack.url);

const eventToBilling = (data: any): JSON => {
  return JSON.parse(Buffer.from(data, "base64").toString());
};

const createSlackMessage = (
  pubsubMessage: any,
): {
  text: string;
  mrkdwn: boolean;
} => {
  const message = {
    text: `CostAmount: ${pubsubMessage.costAmount}`,
    mrkdwn: true,
  };
  return message;
};

const notifyBilling = functions.pubsub
  .topic(`sentrei-${config.environment}-billing`)
  .onPublish(event => {
    const pubSubMessage = createSlackMessage(eventToBilling(event.data));
    (async (): Promise<void> => {
      await webhook.send(pubSubMessage);
    })();
    // eslint-disable-next-line no-console
    console.log(event.data);
  });

export default notifyBilling;
