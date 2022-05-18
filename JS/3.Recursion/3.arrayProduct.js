function main(){
    let arr = [1,2,3,4,5];
    let ans = prod(0,arr.length,arr)
    console.log(ans); 
}
main();
function prod(i,n,arr){
    if(n==i){
        return 1;
    }
    return arr[i] * prod(i+1,n,arr);
}