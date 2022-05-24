function main(n){
    let arr = [];
    for(let i=1; i<=n; i++){arr.push(i)}
    let idx = 0;
    let answerSet = [];
    subset(arr.length, arr, idx, [], answerSet);
    answerSet.forEach((x,i)=>{
        answerSet[i].map(Number);
    })

    answerSet.sort();
    
    answerSet.forEach(x=>{
        console.log(x.join(' '));
    })
}
main(10);

function subset(n,arr,idx,temp,answerSet){
    if(idx == n){
        answerSet.push(temp);
        return;
    }
    subset(n,arr,idx+1, [...temp, arr[idx]], answerSet);
    subset(n,arr,idx+1, [...temp], answerSet);
}