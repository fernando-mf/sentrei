FROM mhart/alpine-node:14.0.0

WORKDIR /app
COPY . .

RUN yarn install --production
RUN yarn tsc

WORKDIR /app/packages/web

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
