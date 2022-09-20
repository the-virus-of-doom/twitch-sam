require('dotenv').config()
const tmi = require('tmi.js');

let options = {
    options: {
        debug: true
    },
    connection: {
        secure: true,
        reconnect: true
    },
    /* identity: {
        username: process.env.TWITCH_USERNAME,
        password: "oauth:xxxxxxxxxxxxxxxxxx"
    }, */
    channels: [ "#the_virus_of_doom" ]
};

let client = new tmi.client(options);

// Connect the client to the server..
client.connect();

/* client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
}); */

client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith('!')) return;

	const args = message.slice(1).split(' ');
	const command = args.shift().toLowerCase();

	if(command === 'echo') {
		//client.say(channel, `@${tags.username}, you said: "${args.join(' ')}"`);
        console.log(`@${tags.username}, you said: "${args.join(' ')}"`)
	}
});