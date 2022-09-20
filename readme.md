# Twitch Redeem: Software Automatic Mouth

## About

This program will integrate Software Automatic Mouth (SAM) into a twitch stream using a channel point redeem. To learn more about SAM, please visit this site: <https://discordier.github.io/sam/>

## Project Overview

Using [Node.js](https://nodejs.org/en/), combine [tmi.js](https://github.com/tmijs/tmi.js) and [SAM](https://github.com/discordier/sam) to subscribe to the twitch channel point redeption event and then pipe that into SAM.

## Features

Allow users to use SAM as an on stream TTS voice with the following settings:

* Text to be spoken aloud
* Preset voices OR Pitch, Speed, Mouth, and Throat control

## Notes from 2022-09-03

Primarily worked on SAM side of things. Also moved from `yarn` to `npm`.

### So far

We have found out the following:

* SAM must be run in a browser window in order to speak
* We can now run `sayText()` commands in the browser console to speak
* We can run `sayText()` by pressing a button
* There are issues with using the `sam-js` npm package and need to reference the script itself in the `node_modules` folder
  * located at `node_modules/sam-js/dist/samjs.js`
* `sam-js` has a ton of extra logging that fills up the console. Maybe fork the repo and add a (working) debug toggle to reduce console spam?

### TODO

* `sam-js` fork and cleanup
* `tmi.js` channel point API connection
* basic html page setup for use in OBS
  * greenscreen with text that pops up when channel points are redeemed
  * logging to page as a start?

## Notes from 2022-09-20

Tried to get twitch integration going. Instead spent most of the time reading documentation for webpack as a potential solution to transpile multiple .js files to prevent some of the weird `import` issues.

This only somewhat worked.
