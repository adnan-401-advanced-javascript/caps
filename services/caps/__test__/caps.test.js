/* eslint-disable no-undef */

const caps = require("../caps");

jest.spyOn(global.console, "log");

describe("Test", () => {
  it("test handler", () => {
    const buffer = Buffer.from(JSON.stringify({ topic: "test", payload: "test" }), "utf-8");
    caps.dataHandler(buffer);
    expect(console.log).toHaveBeenCalled();
  });
});
