/* eslint-disable no-use-before-define */
const net = require("net");

const server = net.createServer();

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`server is running on ${port}`));

const socketPool = {};

function broadcast(msg) {
  /* eslint-disable-next-line */
  for (let id in socketPool) {
    socketPool[id].write(msg);
  }
}

server.on("connection", (socket) => {
  console.log("user is online!!!");
  const id = `Socket-${Math.random() * 100}`;
  console.log("id >>>>>>> ", id);
  socketPool[id] = socket;
  socket.on("data", dataHandler);

  socket.on("error", (e) => {
    console.log("ERROR !!!!!!! ", e.message);
  });

  socket.on("close", () => {
    delete socketPool[id];
  });
});

const dataHandler = (buffer) => {
  logEvent(buffer);
  broadcast(buffer);
};

function logEvent(msgBuffer) {
  console.log("calledlogEventlogEventlogEventlogEventlogEvent");
  const { topic, payload } = JSON.parse(msgBuffer.toString());
  console.log(`
    EVENT { event: ${topic},
      time: ${new Date().toISOString()},
      payload:
       { store: ${payload.storeName},
         orderID: ${payload.orderId},
         customer: ${payload.customerName},
         address: ${payload.address} } }`);
}

module.exports.dataHandler = dataHandler;
module.exports.logEvent = logEvent;
module.exports.broadcast = broadcast;
