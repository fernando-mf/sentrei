FROM node:14.1.0-alpine as builder

WORKDIR /app
COPY . /app

RUN yarn install --production && \
    yarn run typescript && \
    yarn run unsplashg

WORKDIR /app/packages/web

RUN yarn build && \
    yarn cache clean

FROM node:14.1.0-alpine

WORKDIR /app/packages/web
COPY --from=builder /app /app

ENV PORT 8080
EXPOSE 8080

CMD ["yarn", "start", "-p", "8080"]
