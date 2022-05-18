function main(){
 // printSum(i,n,sum);
    printSum(1,5,0);
}
main();

function printSum(i,n,sum){
    if(i==n){
        sum+=i;
        console.log(sum);
        return;
    }

    sum+=i;
    printSum(i+1,n,sum);
}