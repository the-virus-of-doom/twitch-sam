const tmi = require('tmi.js');

const client = new tmi.Client({
	channels: [ 'the_virus_of_doom' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
    logToPage(`${tags['display-name']}: ${message}`)
});
