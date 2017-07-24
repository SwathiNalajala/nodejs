// Import events module  
var events = require('events');  
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter();  
  
// Create an event handler as follows  
 
    
   // Fire the data_received event   
   eventEmitter.emit('data_received');  
  
// Bind the connection event with the handler  
eventEmitter.on('connection', function connected() {  
   console.log('connection succesful.');});  
 // Bind the data_received event with the anonymous function  
eventEmitter.on('data_received', function(){  
   console.log('data received succesfully.');  
});  
// Fire the connection event   
eventEmitter.emit('connection');  
eventEmitter.emit('data_received');
console.log("Program Ended.");  
