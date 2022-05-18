function patternPrinting(N) {
    let arr =[]
    for(let i=0; i<N; i++){
        let s = ''
        for(let j=i; j<N; j++){
            if(j==N-1){
                s+='*'
            }else{
                s+='* '
            }
            
        }
        arr.push(s);
    }
    for(let i=0; i<arr.length; i++){
        while(arr[i].length<arr[0].length){
            arr[i]+=' '
        }
    }
    arr.forEach(x=>{
        console.log(x);
    })
}
patternPrinting(5);
