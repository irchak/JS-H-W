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
// *Написати функцію, яка перероблятиме текст з числами
// "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
//  на текст з порядковими числівниками за допомогою мапи вище:
// "This year I will enter the first grade. I have two brothers. I am the third child of my parents."

const text = new Map([
  ["This year I will enter the 1 grade.", 1],
  ["I have two brothers", "two"],
  ["I am the 3 child of my parents.", 3],
]);

const phrase = "first, two, third";

function numeralsText(phrase) {
  return phrase
    .split(" ")
    .map(n => (text.has(n) ? text.get(n) : n))
    .join(" ");
}

const numerals = numeralsText(phrase);
console.log(text);
