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
const arrayTwo =[1,3,4,7,8,2];
const sum = arrayTwo.reduce(function(arr, item, val){
  return arr + val;
})//?

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
//function each(arr, callback) {
//  const arr = [1, '4', 9, 'two'];
//  arr.reverse();
//}
//arr=[1, '4', false, 9, 'two'];
//function toNumberArr() {
//  return(array2.map(Number).filter(item =>
//    isNaN(item) === false));
//}

//task 3
const arr = [1, '4', 9, 'two'];
function each(arr, func, element){
  arr.reverse();
  func(arr,element);
}

function toNumberArr(arr, element) {
  arr.map(item => item.match(). join(''));
  arr.map(item => item.match(). join(''). join());
}
const resul = (each, toNumberArr);

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