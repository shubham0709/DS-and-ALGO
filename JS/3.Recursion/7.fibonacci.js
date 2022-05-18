function main(){
    for(let i=0; i<10; i++){
        console.log(fibo(i));
    }
}
main();
function fibo(n){
    if(n==0 || n==1)return n;
    return fibo(n-1)+fibo(n-2);
}