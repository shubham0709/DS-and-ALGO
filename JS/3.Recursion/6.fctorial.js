function main(){
    let fact = f(6);
    console.clear();
    console.log(fact);
}
main();
function f(n){
    if(n==0)return 1;
    else return n*f(n-1);
}