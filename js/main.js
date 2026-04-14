
// const colors = ["red", "green", "blue"];

// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1, color2);

// const [firstColor, secondColor, thirdColor] = colors;
// console.log(firstColor, secondColor, thirdColor);

// const [primary, , tertiary] = colors;
// console.log(primary, tertiary);

// const [c1, c2, c3, c4 = "yellow"] = colors;
// console.log(c4);



// const user = {
//   name: "Алиса",
//   age: 25,
//   city: "Москва",
// };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, userAge);

// const { name, age, city } = user;
// console.log(name, age, city);

// const { name: fullName, age: years } = user;
// console.log(fullName, years);

// const { name: personName, country = "Россия" } = user;
// console.log(personName, country);



// function printUserOld(userObj) {
//   console.log(`${userObj.name}, ${userObj.age}, ${userObj.city}`);
// }

// function printUserNew({ name, age, city }) {
//   console.log(`${name}, ${age}, ${city}`);
// }

// printUserOld(user);
// printUserNew(user);



// const product = {
//   name: "Молоко",
//   price: 100,
//   category: "Продукты питания",
//   inStock: true
// };

// const { name: productName, price, category, inStock } = product;
// console.log(productName, price, category, inStock);

// function printProduct({ name, price, category, inStock }) {
//   console.log(`Товар: ${name}, цена: ${price} руб., категория: ${category}, наличие: ${inStock ? "есть" : "нет"}`);
// }

// printProduct(product);

// console.log("\n=== Spread для массивов ===");
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log("Объединённый массив:", combined);
// const copy = [...arr1];
// console.log("Копия массива:", copy);
// const extended = [0, ...arr1, 7, 8];
// console.log("Расширенный массив:", extended);

// console.log("\n=== Spread для объектов ===");
// const person = { 
//     name: "Иван", 
//     age: 30 
// };
// const address = { 
//     city: "Санкт-Петербург", 
//     street: "Невский проспект" 
// };
// const fullInfo = { ...person, ...address };
// console.log("Полная информация:", fullInfo);
// const personCopy = { ...person };
// console.log("Копия объекта:", personCopy);
// const updated = { ...person, age: 31, occupation: "Developer" };
// console.log("Обновлённый объект:", updated);

// console.log("Rest оператор")
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }
// console.log("Сумма 1,2,3:", sum(1, 2, 3));
// console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
// const numbers = [10, 20, 30, 40, 50];
// const [first, second, ...rest] = numbers;
// console.log("Первое число:", first);
// console.log("Второе число:", second);
// console.log("Остальные числа:", rest);



// const nums1 = [6, 7, 8];
// const nums2 = [1, 4, 9];
// const merged = [...nums1, ...nums2];
// console.log("Объединённые массивы:", merged);

// function findMax(...nums) {
//   return Math.max(...nums);
// }
// console.log("Максимум из 6, 8, 1, 5:", findMax(6, 8, 1, 5));

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };
// console.log("Объединённый объект:", mergedObj);

// import { greet, add, multiply, PI } from './utils.js';
// import defaultGreeting from './utils.js';
// import * as MathModule from './math.js';

// console.log(greet("Вика"));
// console.log("5 + 3 =", add(5, 3));
// console.log("4 * 7 =", multiply(4, 7));
// console.log("PI =", PI);
// console.log(defaultGreeting());

// console.log("Квадрат 6 =", MathModule.square(6));
// console.log("Куб 3 =", MathModule.cube(3));
// console.log("Число E =", MathModule.E);

// console.log("\n=== Промисы ===");

// const simplePromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Операция выполнена успешно!");
//   } else {
//     reject("Произошла ошибка!");
//   }
// });

// simplePromise
//   .then((result) => console.log("Результат:", result))
//   .catch((error) => console.log("Ошибка:", error));

// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve(`Прошло ${ms} миллисекунд`);
//     }, ms);
// });
// delay(1000).then(() => console.log(message));

// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({ 
//             id: userId, 
//             name: "Вика Текутова", 
//             email: "vikatekutova7@gmail.com"});
//       } else {
//         reject("Неверный ID пользователя");
//       }
//     }, 1500);
//   });
// }

// fetchUserData(1)
//   .then((user) => console.log("пользователь:", user))
//   .catch((error) => console.log("Ошибка:", error));

// function step1(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("шаг 1 завершен"), 500);
//   });
// }

// function step2(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult}шаг 2 завершен:`), 500);
//   });
// }

// function step3(value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${previousResult}шаг 3 завершен:`), 500);
//   });
// }

// step1(5)
//   .then((result1) => step2(result1))
//   .then((result2) => step3(result2))
//   .then((finalresult) => console.log("Результат:", finalresult))
//   .catch((error) => console.log("Ошибка в цепочке:", error));

console.log("\nПрактическое задание (Промисы)");

function checkInventory(productName, inStock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inStock) {
        resolve(`Товар "${productName}" есть в наличии.`);
      } else {
        reject(`Товар "${productName}" отсутствует.`);
      }
    }, 1000);
  });
}

checkInventory("Смартфон", true)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

checkInventory("Планшет", false)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));