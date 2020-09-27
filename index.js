const tmi = require('tmi.js');
var robot = require("robotjs");

const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true
    },
    channels: ['c0d3Spaghetti']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"
    console.log(`${tags['display-name']}: ${message}`);

    if (self || !message.startsWith('!')) return;

    const args = message.slice(1).split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'walk' || command === 'w') {
        console.log('Walking');
        robot.keyTap('w');
    }

    else if (command === 'run' || command === 'r') {
        console.log('Running');
        robot.keyTap('e');
    }

    else if (command === 'see' || command === 's') {
        console.log("Let's See");
        robot.mouseClick();
    }
    
    else if (command === 'jump' || command === 'j') {
        console.log("Jumping");
        robot.keyTap("space");
    }

});


