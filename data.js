let faker = require('faker')

function generateData() {
  var customers = []

  for (var id = 1; id <= 50; id++) {
    let name = faker.name.findName(),
      email = faker.internet.email(),
      phone = faker.phone.phoneNumberFormat(),
      productName = faker.commerce.productName(),
      price = faker.commerce.price();

    customers.push({
      "id": id,
      "name": name,
      "email": email,
      "phone": phone,
      "productName": productName,
      "price": price
    })
  }

  return { "customers": customers }
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateData;