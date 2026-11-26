let res = sumDigits(12345);
console.log(`sum digits of 12345 = ${res}`); // should print 15
res = luckuNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print lucky
res = luckuNumber(124871); // 1 + 4 + 7 !== 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print not lucky


function sumDigits(n) {
    let res = 0;
    while(n>0) {
        res += n % 10; //add last digit
        n=((n-(n%10))/10); //brit mila
        }
    return res;
}

function luckuNumber(num) {
    let chet = 0;
    let nechet = 0;
    while(num>0){
        chet += num % 10;
        num=((num-(num%10))/10);
        nechet += num % 10;
        num=((num-(num%10))/10);
        }

    return (chet===nechet);
}







