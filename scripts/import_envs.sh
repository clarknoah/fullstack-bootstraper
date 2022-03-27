#!/bin/bash
# heroku logout
# heroku login -i;

## Set environmental variables from ../server/env to variable called SERVER_ENV
SERVER_ENV="$(cat server/.env | grep '=')"


## Set environmental variables from ../server/env to variable called CLIENT_ENV
CLIENT_ENV="$(cat client/.env | grep '=')"


# echo SERVER_ENV and CLIENT_ENV
echo "$SERVER_ENV"
echo "$CLIENT_ENV"



echo $SERVER_ENV | tr '\n' ' ' | xargs heroku config:set -a  intelligent-learning
echo $CLIENT_ENV | tr '\n' ' ' | xargs heroku config:set -a  intelligent-learning