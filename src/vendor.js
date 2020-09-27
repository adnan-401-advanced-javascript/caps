const eventEmitter = require("./events");
const Order = require("./models/Order");

setInterval(() => {
  const order = new Order();
  eventEmitter.emit("pickup", order);
}, 5000);

const deliveredHandler = (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
};
eventEmitter.on("delivered", deliveredHandler);

module.exports.deliveredHandler = deliveredHandler;
