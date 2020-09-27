const eventEmitter = require("./events");

eventEmitter.on("pickup", (payload) => {
  console.log(`
  EVENT { event: 'pickup',
    time: ${new Date().toISOString()},
    payload:
     { store: ${payload.storeName},
       orderID: ${payload.orderId},
       customer: ${payload.customerName},
       address: ${payload.address} } }`);
});

eventEmitter.on("in-transit", (payload) => {
  console.log(`
  EVENT { event: 'in-transit',
    time: ${new Date().toISOString()},
    payload:
     { store: ${payload.storeName},
       orderID: ${payload.orderId},
       customer: ${payload.customerName},
       address: ${payload.address} } }`);
});

eventEmitter.on("delivered", (payload) => {
  console.log(`
  EVENT { event: 'delivered',
    time: ${new Date().toISOString()},
    payload:
     { store: ${payload.storeName},
       orderID: ${payload.orderId},
       customer: ${payload.customerName},
       address: ${payload.address} } }`);
});
