//задача 1
let a = Number(prompt(`Введите одно число`));
let c = Number(prompt(`Введите второе число`));
function numb(a,c) {
    if (a < c) {
        return a;
    } else if (a > c) {
        return c;
    }
    else if (a === c) {
        return a || c;
    }
}
console.log(numb(a,c));
