
//1task
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
//7 var2
function getRandomIntegralNumber(a,b){
  if(a>b){
      c=b;
      b=a;
      a=c;
  };
  let arr =[];
  for(i=0; i <=(b-a); i++) {
      arr[i]=[Math.random(), a+i]};
  return arr.sort()[1][3]}
  console.log();
//var 3
function newArr(x,y) {
  let array =[];
  for(let j =x; j<= y; j++)
  array.push(j);
  return array;
}
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
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"];
let mDate = new Date();
let fullDate = "Дата: " + mDate.getDate()+ " " + months[mDate.getMonth()]+ " " + mDate.getFullYear()+ "-это"+ " " + days[mDate.getDay()];
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(fullDate+",Время: " + hour + ":" + minute + ":" + second);

//11 task _ Работа с макетом
function gameTwo() {
  let gameTwo = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  gameTwo = gameTwo.sort(() => Math.random() - 0.5);
  alert(gameTwo);
  let answer = prompt('Чему равнялся первый элемент массива?');
  let answer2 = prompt('Чему равнялся последний элемент массива?');
  if (answer === gameTwo[0] && answer2 === gameTwo[gameTwo.length-1]) {
   alert('Вы угадали оба элемента!');
  } else if(answer === gameTwo[0] || answer2 === gameTwo[gameTwo.length-1]) {
   alert('Вы были близки к победе!');
  } else {
   alert('Вы не угадали ни одного элемента!');
  }
 }

