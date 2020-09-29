/* eslint-disable no-undef */

process.env.NODE_ENV = "testing";

const { deliveredHandler } = require("../services/vendor/socketHandler");

const Order = require("../services/vendor/models/Order");

const payLoad = new Order();

jest.spyOn(global.console, "log");

describe("Test", () => {
  describe("Test", () => {
    it("test deliveredHandler handler", () => {
      deliveredHandler(payLoad);
      expect(console.log).toHaveBeenCalled();
    });
  });
});
