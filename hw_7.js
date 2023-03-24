//1 ЗАДАЧА
let str = 'js';
str = str.toUpperCase();
console.log(str); 

//2 ЗАДАЧА
const words = ['примитивы как объекты', 'сдать домашку', 'встроенные объекты', 'объект', 'шпаргалка'];
const search = 'объект';
words.forEach((word) => {
  if (word.toLowerCase().includes(search.toLowerCase())) {
    console.log(word);
  }
});
//2 var 2
const searchTwo =(arr, str) => {
  let resultTwo =[];
  arr.forEach(item => {
    if (item.toUpperCase().startsWith(str.toUpperCase())) {
      resultTwo.push(item);
    }
  })
  return resultTwo;
}
console.log(searchTwo(['арбуз', 'кот', 'архипелаг', 'объект', 'книга'], 'ар'));

//З ЗАДАЧА
let num = 32.58884;
console.log(Math.round(num, -1));// Округление к ближайшему
console.log(Math.floor(num, -1));// Округление к меньшему
console.log(Math.ceil(num, -1));// большему целому

//4 ЗАДАЧА
let a = Math.max(52, 53, 49, 77, 21, 32);
console.log(a);
let z = Math.min(52, 53, 49, 77, 21, 32);
console.log(z);
//5 ЗАДАЧА
function randomNumber(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
  }
console.log( randomNumber(1, 10));
// 6 ЗАДАЧА
//example
//getRandomArrNumbers(7); // [6, 2, 7] - массив заполнен случайными числами
// от 0 до 7, длина массива 7 / 2 = 3.5, округляем до ближайшего меньшего
// числа, получаем 3
//getRandomArrNumbers(12); // [9, 11, 10, 9, 3, 0] - массив заполнен случайными числами
// от 0 до 12, длина массива 12 / 2 = 6
let ent = Number(prompt('Введите число'));
function getRandomArrNumbers(length = Math.floor(ent/2)) {
  return Array.from(Array(length),() => Math.floor(Math.random()* ent)+1);
}
let random = getRandomArrNumbers();
console.log(random);
//7 ЗАДАЧА
let min = Number(prompt('Введите первое целое число'));
let max = Number(prompt('Введи второе целое число'));
console.log(Math.round(Math.random()*(max - min)) + min);
//8 ЗАДАЧА
let myDate = new Date(2023, 2, 23, 20, 34, 35, 11); 
console.log(myDate);
//9 ЗАДАЧА
let currentDate = new Date();
let date = 73;
console.log(currentDate.setDate(currentDate.getDate()+ date));
// Дата текущего дня.
const today = new Date();
//добавляем к текущей 73 дня
console.log(today.setDate(today.getDate() + 73));
//TASKS10
//Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
//Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
//Время: <часы>:<минуты>:<секунды>
//Время, которое будет выведено, также хранится в объекте Date.

