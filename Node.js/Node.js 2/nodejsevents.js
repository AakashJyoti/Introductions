const EventEmitter = require('event');

class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();

myEmitter.on('watterFull', ()=>{
    console.log('please turn off the motor!..');
    setTimeout(() =>{
        console.log('please turn of the moter this is an gentel reminder');
    },3000);
})