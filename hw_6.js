const numbs = [1, 5, 4, 10, 0, 3];
for (let a = 0; a < numbs.length; a++) {
  if (numbs[a] === 0) break;
  console.log(numbs[a]);
}
//2
const a = [1, 5, 4, 10, 0, 3];
a.forEach((el, index) => {
  console.log(`${index}: ${el}`);
}); //выдедет 4 стоит под 2 позицией/ индексом 

//2 changed
const u = [1, 5, 4, 10, 0, 3];
console.log(u.indexOf(4));

//3
const c = [1, 3, 5, 10, 20];
console.log(c.join(' '));
//4
let ess =[
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
]
console.log(ess);
//4 changed 
let f = [];
for (let i = 0; i < 3; i++) {
  f[i] = []; 
  for (let j = 0; j < 1; j++) {
    f[i].push(j + 0); 
  }
}
//5
let i = ['1', '1', '1'];
i.push(2, 2, 2);
console.log(i);

//6
let sort =[9, 8, 7, 'a', 6, 5];
sort = sort.sort();
console.log(sort);
sort = sort.pop();
console.log(sort);

//7
/*let user =prompt('введите число от 1-10');
let numbers = [9, 8, 7, 6, 5];
let results = numbers.includes(1,2,3,4,5,6,7,8,9,10);
console.log();// на все выводит false
*/
//7

//8
const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);
//9
let arr2 =[[1, 2, 3,],[4, 5, 6]];
arr2.flat();
console.log(arr2.flat());
//10
let goal =[5, 7, 2, 8, 4, 6, 1];
for (let t =0; t < goal.length -1; t++) {
  let sum = goal[t] + (goal[t + 1]);
  console.log(sum);
}
//11
const squear = [1, 2, 3, 7, 9];
let squearTwo = squear.map(item =>item**2);
console.log(squearTwo);
//12
const words = ['массив', 'slep', 'eat', 'строка', 'parrot'];
let wordsN = words.map((item) => item.length);
console.log(wordsN);
//13
const tasks =[1, 3, 5, 7];
let tasksA = tasks.map(item => -item);
console.log(tasksA);
//13 changed
const filtr =[1, -2, 3, -8];
const result = filtr.filter(item => item <-1);
console.log(result);