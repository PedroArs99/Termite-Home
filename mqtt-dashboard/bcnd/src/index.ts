import * as mqtt from "mqtt"  // import everything inside the mqtt module and give it the namespace "mqtt"
let client = mqtt.connect('mqtt://rpi') // create a client

client.on('connect', function () {
    client.subscribe('$SYS/broker/version');
    client.subscribe('$SYS/broker/publish/messages/sent');

})

client.on('message', (topic, message) => {
  console.log(new Date(), topic,  message.toString())
})
