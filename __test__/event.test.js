/* eslint-disable no-undef */
const EventEmitter = require("events");

const Order = require("../src/models/Order");

const { pickupHandler } = require("../src/driver");
const { deliveredHandler } = require("../src/vendor");

const emitter = new EventEmitter();

jest.spyOn(global.console, "log");

describe("Test", () => {
  it("test pickup", () => {
    const order = new Order();
    emitter.on("pickup", pickupHandler);
    emitter.emit("pickup", order);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 1000);
  });

  it("test delivered", () => {
    const order = new Order();
    emitter.on("delivered", deliveredHandler);
    emitter.emit("delivered", order);
    expect(console.log).toHaveBeenCalled();
  });
});
