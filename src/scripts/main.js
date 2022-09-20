// import './tmi-chat.js'

// SAM stuff
let opts = {
    debug: false,
    pitch: 64,
    speed: 72,
    mouth: 128,
    throat: 128
};
var speech;
function sayText(myText){
    var sam = new SamJs(opts);
    if (speech) speech.abort();
    speech = sam.speak(myText);
    speech.catch(() => {});
}

// logging stuff
export function logToPage(myLog){
    logDocument = document.getElementById('loggingTable');
    logDocument.innerHTML = logDocument.innerHTML + '<tr><td>' + myLog + '</td></tr>'
}

export function helloWorld(){
    console.log('Hello world!');
}