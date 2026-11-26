const arr = [1, 2, 3, 'four', 'five', true];
console.log(typeof arr);
console.log(arr[3]);
// arr = 42;
console.log(typeof arr[2]);
console.log(arr.length);
arr[3] = 4;
console.log(arr[3]);
printArray(arr);
console.log(arr);
arr[10] = 100500;
// arr[arr.length] = 100500;
// arr[arr.length] = '42';
console.log(arr);
printArray(arr);
console.log(arr.length);
console.log(arr[8]);
arr.length = 3;
console.log(arr);
printArray(arr);
const arr1 = [];


function printArray(arr) {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}