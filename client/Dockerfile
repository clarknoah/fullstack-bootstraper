# pull official base image
FROM node:14-alpine

WORKDIR /app/client

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn

CMD yarn dev
