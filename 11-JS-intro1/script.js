 console.log("Hello Word!");
 let x;
 console.log(x);
 x=7;
 console.log(x);
 x='dosvidos';
const pi=1.1415926;
//comment
/* comment */
let y=x
let a=3.718281828;
console.log("a="+a);
console.log(`a=${a}`);
const exp=a;
a=2.72;
console.log('exp=' +exp+' or '+a);
console.log(`exp=${exp} or ${a}`);
x=true;
console.log(x);
x=null;
console.log(x);
//x=undefined; Не есть гут!
x = 7 % 5; // Результат 2
x = 5-true // 4
x = 5 * '2' // 10
x= 5 + '2' //'52' ( Только для плюс)
x = 5 + 'true' // '5true'
 switch(x){
    case 5:
        console.log('number: s{x}');
        break;
    case '5':
        console.log('string: ${x}');
        break;
    default:
        console.log('Not a five');
 }

 let age = 27;
//  let vol;
//  if(age>=18){
//     vol = 42
//  }else{
//     vol=1.5;
//  }
let vol = age >= 18 ? 42 : 1.5
console.log(`vol= ${vol}`)
x = -age // -27
x++; // -26 
++x //тоже работает

for(let i = 1; i<=5; i++){
    console.log(i);
}







