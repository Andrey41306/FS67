let a = 10;
let b = 20;
let res = a / b;
console.log(res);
console.log(typeof res);
res = solution(a, b);
console.log(res);
b = 0;
res = solution(a, b);
console.log(res);
a = 0;
res = solution(a, b);
console.log(res);


function solution(a, b) {
    let res = a / b;
    if (isNaN(res)) {
        return 'Solution any number';
    }
    if (!isFinite(res)) {
        return 'No solution';
    }
    return res;
}