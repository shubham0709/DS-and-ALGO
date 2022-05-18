let str = 'good';
let arr = str.split("");
let ans = ''
let flag = true;
for(let i=0; i<str.length; i+=2){
    if(str[i]==str[i+1]){
        arr[i]='';
        arr[i+1]=''
    }
}

arr.forEach(x=>{
    if(x!==''){
        ans+=x;
    }
});
console.clear();
console.log(str.length - ans.length);
console.log(ans);
