FROM mhart/alpine-node:14.0.0

WORKDIR /app
COPY . .

RUN yarn install --production
RUN yarn tsc

WORKDIR /app/packages/web

RUN yarn build

ENV PORT 8080

EXPOSE 8080

CMD ["yarn", "start", "-p", "8080"]
