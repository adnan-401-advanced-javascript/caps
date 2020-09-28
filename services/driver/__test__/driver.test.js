/* eslint-disable no-undef */

const dataHandler = require("../dataHandler");

jest.spyOn(global.console, "log");

describe("Test", () => {
  it("test handler", () => {
    const buffer = Buffer.from(JSON.stringify({ topic: "pickup", payload: { orderId: 1 } }), "utf-8");
    dataHandler(buffer);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 1000);
  });
});
