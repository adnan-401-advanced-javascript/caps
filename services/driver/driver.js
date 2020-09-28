/* eslint-disable no-use-before-define */
const net = require("net");

const dataHandler = require("./dataHandler");

const client = new net.Socket();

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;

client.connect(port, host, () => {
  console.log("driver is connected to Server! ..");
});

client.on("data", (data) => {
  dataHandler(data, client);
});

client.on("close", () => {
  console.log("connection is closed!!");
});

client.on("error", (err) => {
  console.log("error --------------------> ", err);
});
