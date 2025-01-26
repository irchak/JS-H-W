function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}
console.table(users);

//* прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

//Отримати масив користувачів, які не підписані (not subscribed).

const notSubscribed = users.filter(user => !user.isSubscribed);
console.table(notSubscribed);

//Вивести список повних імен користувачів.

users.forEach(user => {
  console.log(user.getFullName());
});

//Видалити з масиву користувача з email  useremail5@gmail.com.
const deleteUser = users.filter(user => user.email !== "useremail5@gmail.com");
console.table(deleteUser);

//Змінити email користувачу з id 2 (можна спробувати використати find).
const newEmail = users.find(user => user.id === 2);
if (newEmail) {
  newEmail.email = "newemail@mail.com";
}

console.log(newEmail);
