#!/bin/sh

killall node

nohup node /home/user/app/audio_slide_control/server/index.js &

#google-chrome /home/user/app/audio_slide_control/index.html
firefox /home/user/app/audio_slide_control/index.html