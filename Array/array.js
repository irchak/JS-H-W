//0

const numbers = [2, 4, 6, 1, 8, 5];
console.log(numbers);

//1
const resultPop = numbers.pop(-1);
const resultShift = numbers.shift(0);
console.log(numbers);

numbers.unshift(7);
numbers.push(9);
console.log(numbers);

//2
console.log(numbers.length);

//3
const numbers2 = numbers.slice(0);
console.log(numbers2);

//4
console.log(numbers);

for (let i = 0; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}

//5
const numbers3 = [4, 5, 8, 2];

function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum(numbers3));

//6
const phone = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 7+",
    color: "gold",
    prise: 300,
    RAM: "8GB",
  },
  {
    id: 2,
    brand: "Apple",
    model: "iPhone 8+",
    color: "pink",
    prise: 450,
    RAM: "6GB",
  },
  {
    id: 3,
    brand: "Apple",
    model: "iPhone 13",
    color: "gold",
    prise: 500,
    RAM: "4GB",
  },
];

for (let i = 0; i < phone.length; i++) {
  document.write(`
    <article class="container">        
     <img class="ph-img" src="./assets/smartphone-balancing-with-pink-background_23-2150271746.jpg.avif" alt="Phone">
        <li class="phone-item ">
            <span class="ph-brand"> ${phone[i].brand}</span>
            <span class="ph-model">${phone[i].model}</span>
            <span class="ph-color">${phone[i].color}</span>
            <span class="ph-prise">${phone[i].prise}</span>
            <span class="ph-ram">${phone[i].RAM}</span>
        </li>
    </article>`);
}

function averagePrise(cost) {
  let sum = 0;

  for (let i = 0; i < cost.length; i++) {
    sum += cost[i].prise;
  }
  return sum / cost.length;
}

console.log(averagePrise(phone));

//8
const array = [-1, 5, 0, 9, -10];

const valueArray = array.filter(array => array != 0);
console.log(valueArray);

//9
const element = [99, 5, 0, 9, 30];

const valueElement = element.map(e => e / 100);
console.log(valueElement);

//10
element.forEach(element => {
  console.log(element ** 3);
});

//11
const indexElevent = element.findIndex(element => element * element === 100);

if (indexElevent !== -1) {
  console.log("Eлемент видалено");
} else {
  console.log("Елемента в масиві не існує");
}

//12
function evenNumber(element) {
  return element / 2;
}

console.log(element.every(evenNumber));

//13
const even = element => element < 0;
console.log(element.some(even));
