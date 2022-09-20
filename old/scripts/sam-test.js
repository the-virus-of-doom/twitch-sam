import SamJs from 'sam-js';

let sam = new SamJs();

// Play "Hello world" over the speaker.
// This returns a Promise resolving after playback has finished.
sam.speak('Hello world');

// // Generate a wave file containing "Hello world" and download it.
// sam.download('Hello world');

// // Render the passed text as 8bit wave buffer array (Uint8Array).
// const buf8 = sam.buf8('Hello world');

// // Render the passed text as 32bit wave buffer array (Float32Array).
// const buf32 = sam.buf32('Hello world');