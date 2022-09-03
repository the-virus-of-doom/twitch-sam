//var SamJS = require('sam-js');

import SamJS from 'sam-js';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

let sam = SamJS();

sam.speak('Hello world');