# syntax=docker/dockerfile:1
FROM node:18-alpine

ENV PORT=3002

RUN \
  apk --no-cache add --virtual build-dependencies python3 build-base git

WORKDIR /automatisch

# copy the app, note .dockerignore
COPY . /automatisch

RUN yarn

WORKDIR /automatisch/packages/web
RUN yarn build

RUN \
  rm -rf /usr/local/share/.cache/ && \
  apk del build-dependencies

COPY ./docker/entrypoint.sh /entrypoint.sh

EXPOSE 3002
ENTRYPOINT ["sh", "/entrypoint.sh"]
