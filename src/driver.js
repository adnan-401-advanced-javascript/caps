const eventEmitter = require("./events");

eventEmitter.on("pickup", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    eventEmitter.emit("in-transit", payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    eventEmitter.emit("delivered", payload);
  }, 3000);
});
