var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');

}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);//Here connection is new event created
//On is used for binding the events
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {//Instead of event handlere name anonymous functoin is created in this.
   console.log('data received succesfully.');
});
// Fire the connection event 
eventEmitter.emit('connection');

// Fire the data_received event 
eventEmitter.emit('data_received');
console.log("Program Ended.");
