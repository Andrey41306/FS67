let res = sumDigits(12345);
console.log(`sum digits of 12345 = ${res}`); // should print 15
res = luckuNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print lucky
res = luckuNumber(124871); // 1 + 4 + 7 !== 2 + 8 + 1
console.log(res ? 'lucky' : 'not lucky'); // should print not lucky


function sumDigits(n) {
    // TODO returned sum of digits
    let res = 0;
    for (let i = 0; i < 10; i++) {
        res += getDigitFromNumber(n, i);
    }
    return res;
}

function luckuNumber(num) {
    // TODO returned true if num is lucky and false otherwise
    // lucky number if sum of odd position is equal to sum of even position digits
    let chet = 0;
    let nechet = 0;

    for (let i = 0; i < 10; i += 2) {
        nechet += getDigitFromNumber(num, i);
        chet += getDigitFromNumber(num, i + 1);
    }

    return (chet===nechet);
}

function getDigitFromNumber(num, pos) {
    return (((num - (num % (10 ** (pos)))) / (10 ** pos)) % 10)
}





