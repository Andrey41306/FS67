const arr=[1,2,3,'four','five',true];
console.log(typeof arr);
console.log(arr[3]);
//arr=42;
arr[arr.length]=100500 // добавление в конец массива
console.log(typeof arr[2]);
console.log(arr.length);
arr[3]=4;
console.log(arr[3]);
printArray(arr)
console.log(arr);
arr[10]=100500;
console.log(arr);
console.log(arr.length);
arr.length=3;
printArray(arr);
const arr1=[];





function printArray(arr){
for (let i=0;i<arr.length; i++){
    console.log(arr[i]);
}
}