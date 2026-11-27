const arr = [9, 2, 4, 1, 5, 2, 9, 1, 2, 0];
printArray(arr);
bubbleSort(arr);
printArray(arr); // 0, 1, 1, 2, 2, 2, 4, 5, 9, 9


function bubbleSort(arr) {
    let i,j;
    let len = arr.length-1;
    for (i=0; i<len; i++ ){
        for(j=0;j<len-i;j++){
            if (arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
}

function printArray(arr) {
    console.log('==========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==========');
}