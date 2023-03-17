#!/bin/sh

killall node

nohup node ./server/index.js &

#google-chrome ./index.html
firefox ./index.html
