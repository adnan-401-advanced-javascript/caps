const dataHandler = (data) => {
  const { topic, payload } = JSON.parse(data.toString());
  if (topic === "delivered") {
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
  }
};

module.exports = dataHandler;
