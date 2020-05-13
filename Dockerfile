FROM node:14.2.0-alpine as builder

ENV NODE_ENV=production

RUN apk --no-cache add g++ make libpng-dev

WORKDIR /app
COPY . /app

RUN yarn install --frozen-lockfile && \
    yarn run typescript

WORKDIR /app/packages/web

RUN yarn build && \
    yarn cache clean

FROM node:14.2.0-alpine

WORKDIR /app/packages/web
COPY --from=builder /app /app

ENV PORT 8080
EXPOSE 8080

CMD ["yarn", "start", "-p", "8080"]
