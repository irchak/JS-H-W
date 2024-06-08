//1
const customer = {
  name: "Lidiia",
  lastName: "Irchak",
  email: "irchaklidia@gmail.com",
  password: "flddgk",
  phoneNumber: "0501075796",
  addres: {
    city: "Uzhhorod",
    street: "Sobranetska",
    house: "146",
    apartment: "18",
  },
};

console.log(customer.email);

customer.isMale = true;
console.log(customer);

delete customer.addres;
console.log(customer);

customerCopy1 = { ...customer };
customerCopy2 = Object.assign({}, customer);

console.dir(customer);
console.dir(customerCopy1);
console.dir(customerCopy2);

//2
const cat = {
  name2: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (let key in cat) {
  console.log(`${key} --- ${cat[key]}`);
}

//3
/**
 *
 * @param {string} author
 * @param {string} title
 * @param {number} year
 * @param {string} publishing
 * @param {number} price
 */
const Books = function (author, title, year, publishing, price) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.publishing = publishing;
  this.price = price;
};

Books.prototype.getBooksAge = function () {
  return new Date().getFullYear() - this.year;
};

Books.prototype.setNewPrice = function (newPrise) {
  this.price = newPrise;
  console.log(`${this.price}`);
};

const book1 = new Books("Julia Quinn", "Bridgerton", 2023, "Vivat", 280);
console.dir(book1);

console.log(`Age books: ${book1.getBooksAge()} year`);
book1.setNewPrice(300);
