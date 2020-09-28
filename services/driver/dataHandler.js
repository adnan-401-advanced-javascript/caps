const dataHandler = (data, client) => {
  const { topic, payload } = JSON.parse(data.toString());
  if (topic === "pickup") {
    setTimeout(() => {
      console.log(`DRIVER: picked up ${payload.orderId}`);
      client.write(JSON.stringify({ topic: "in-transit", payload }));
    }, 1000);

    setTimeout(() => {
      console.log(`DRIVER: delivered up ${payload.orderId}`);
      client.write(JSON.stringify({ topic: "delivered", payload }));
    }, 3000);
  }
};

module.exports = dataHandler;
