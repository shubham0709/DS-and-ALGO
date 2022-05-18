let arr = [7,1,5,3,6,4];
console.log(arr);
let min = arr[0];
let max = arr[0];
let p = 0;
for(let i=0; i<arr.length; i++){
    let temp = arr[i] - min;
    if(temp > p){
        p = temp;
        min = arr[i];
    }
}
