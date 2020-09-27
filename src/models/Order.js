const faker = require("faker");

const storeName = process.env.STORE_NAME;

class Order {
  constructor() {
    this.storeName = storeName;
    this.orderId = faker.random.uuid();
    this.customerName = faker.name.findName();
    this.address = faker.address.country();
  }
}

module.exports = Order;
