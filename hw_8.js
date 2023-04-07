//task 1
function array(arr, callback) {
    const output =[];
    for(let i=0; i < arr.length; i++) {
      output.push(callback(arr[i]));
    }
    return output;
  }
  function arrayMult(num){
    return num + num;
  }
  
  function arraySum(num){
    return num * num;
  }
  const result = array([1,2,4], arrayMult);
  const result2 = array([1,2,3], arraySum);

// task1 var 2 .reduce();
// Создаем функцию, которая принимает массив и колбек
const getResult = (arr, callback) => {
  // Возвращаем результат вызова колбека
  return callback(arr);
};
// Создаем функцию, которая принимает массив
const getSum = (arr) => { 
  // Возвращаем результат вызова метода reduce, 
  // который принимает колбек и начальное значение
  // acc - суммируемое значение, item - текущий элемент массива
  return arr.reduce((acc, item) => acc + item, 0);
};

const getMult = (arr) => {
  return arr.reduce((acc, item) => acc * item, 1);
};

console.log(sum);
//task 2
const users = [
    {name: 'Jon', age: 22},
    {name: 'Richard', age: 18},
    {name: 'Anton', age: 32},
    {name: 'Lida', age: 23},
    {name: 'Bob', age: 44}
  ];
  users.sort(function(a, b){
    return a.age-b.age
  })
  console.log(users);

//task 3
// Создаем функцию, которая принимает массив и колбек
const each = (arr, callback) => {
  // Возвращаем результат вызова колбека
  return callback(arr);
};

// Создаем функцию, которая принимает массив и отфильтровывает его
const toNumberArr = (arr) => {
  // Возвращаем результат вызова метода filter,
  // Если результат приведения к числу не NaN, то вернет true
  // потому что NaN - это false в булевом значении
  return arr.filter((item) => Number(item));
};

const reverseArr = (arr) => {
  return arr.reverse();
};

//task 4
const interval = setInterval(() => {
    console.log(new Date());
  },3000);
  setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
  },30000);

//task 5
function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
    callback();
    }, 1000);
}

function talk() {
  setTimeout(() =>{
    console.log('Разговор')
  },500);
}
calling();
beeps(talk);