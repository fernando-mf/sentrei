FROM mhart/alpine-node:13.13

WORKDIR /app
COPY . .

RUN yarn install
RUN yarn build

WORKDIR /app/sentrei/web

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]
