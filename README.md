# Audio Slide Control

##How to Run

chmod +x audio_slide_control.sh
./audio_clide_control.sh

This project create a API that servers images, audios and video.
With one browser window you can choose what to show at other browser window.
The first window set the current resource. The second one keeps listenings any change and play/show
whatever is the current resource to play/show.

![project print](https://raw.githubusercontent.com/giovanecf/audio_slide_control/main/blob/print.jpg)

#Warning

Needs: - nodejs - any browser

For other browser diff than Firefox, change 'audio_slide_control.sh'(How? See next section)
Or just execute manually index.sh and index.html

##How it works

The audio_slide_control.sh is very simple to understand:

    #!/bin/sh --> something we have to put at the beginning of .sh files

    killall node --> Kill any other node process.

    nohup node ./server/index.js & --> Run the 'index.js' with node without blocking the terminal

    firefox ./index.html --> opens 'index.html' with Firefox

Was choose Firefox because it's let's you play audio and video without having to use the window viewer
before you play something.
