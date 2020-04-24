FROM mhart/alpine-node:14.0.0

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn tsc

WORKDIR /app/sentrei/web

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]
