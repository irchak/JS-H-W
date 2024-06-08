//1
function isWorkingAgePerson(age) {
  if (age >= 16 && age < 64) {
    return true;
  } else {
    return false;
  }
}

let age = prompt("Введіть ваш вік: ", 16);

if (isWorkingAgePerson(age)) {
  console.log("Ви працездатного віку");
} else {
  console.log("Ви не працездатного віку");
}

//2
/**
 *
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {string} - Результат ділення двох чисел націло
 */
function checkMultiplicity(a, b) {
  return a % b === 0 ? true : false;
}

let a = prompt("Введіть число:", 25),
  b = prompt("Введіть число:", 5);

if (checkMultiplicity(a, b)) {
  alert("Числа діляться націло");
} else {
  alert("Числа не діляться без залишку");
}

//3
/**
 *
 * @param {number} c - Перша сторона трикутника
 * @param {number} d - Друга сторона трикутника
 * @param {number} f - Третя сторона трикутника
 * @returns {string} - Чи можливий трикутник
 */

function triangle(c, d, f) {
  return c + d > f && c + f > d && d + f > c ? true : false;
}

let c = +prompt("Введіть довжину першої сторони трикутника: ", 1),
  d = +prompt("Введіть довжину другої сторони трикутника: ", 1),
  f = +prompt("Введіть довжину третьої сторони трикутника: ", 1);

if (triangle(c, d, f)) {
  alert("Трикутник можливий");
} else {
  alert("Трикутник неможливий");
}

//4
/**
 *
 * @param {number} m - Перша сорона прямокутника
 * @param {number} n - Друга сторона прямокунника
 * @returns {number} Площа прямокуника
 */
function rectangle(m, n) {
  return m * n;
}
let m = +prompt("Введіть значення першої сторони: ", 3),
  n = +prompt("Введіть значення другої сторони: ", 4);

if (rectangle(m, n)) {
  alert("Площа прямокутника: " + m * n);
}
