const map = new Map([
  [1, "first"],
  [3, "third"],
]);

//Отримайте кількість елементів.
console.log(map.size);

//Додати та видалити елемент.
map.set(5, "fifth");
map.delete(3);
console.log(map);

//Здійсніть пошук за ключом.
console.log(map.get(1));

//Перевірити, чи є в мапі числівник для числа 2.
console.log(map.has(2));

//Отримайте список ключів та значень окремо.
for (let entry of map) {
  console.log(entry);
}
