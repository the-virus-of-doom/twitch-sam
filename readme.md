# Twitch Redeem: Software Automatic Mouth

## About

This program will integrate Software Automatic Mouth (SAM) into a twitch stream using a channel point redeem. To learn more about SAM, please visit this site: <https://discordier.github.io/sam/>

## Features

Allow users to use SAM as an on stream TTS voice with the following settings:

* Text to be spoken aloud
* Preset voices OR Pitch, Speed, Mouth, and Throat control

## Current plan

Using [Node.js](https://nodejs.org/en/), combine [tmi.js](https://github.com/tmijs/tmi.js) and [SAM](https://github.com/discordier/sam) to subscribe to the twitch channel point redeption event and then pipe that into SAM.
