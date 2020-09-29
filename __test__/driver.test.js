/* eslint-disable no-undef */

process.env.NODE_ENV = "testing";

const { pickupHandler } = require("../services/driver/socketHandler");

const Order = require("../services/vendor/models/Order");

const payLoad = new Order();

jest.spyOn(global.console, "log");

describe("Test", () => {
  describe("Test", () => {
    it("test pickupHandler handler", () => {
      pickupHandler(null, payLoad);
      setTimeout(() => {
        expect(console.log).toHaveBeenCalled();
      }, 1500);
    });
  });
});
