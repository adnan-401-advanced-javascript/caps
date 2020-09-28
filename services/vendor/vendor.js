const net = require("net");

require("dotenv").config(".env");

const dataHandler = require("./dataHandler");
const Order = require("./models/Order");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;

const client = new net.Socket();

client.connect(port, host, () => {
  console.log("Vednor is connected to Server! ..");
});

client.on("data", dataHandler);

client.on("error", (err) => {
  console.log("error ---------->", err);
});

client.on("close", () => {
  console.log("connection is closed!!");
});

setInterval(() => {
  const order = new Order();
  client.write(JSON.stringify({ topic: "pickup", payload: order }));
}, 5000);
