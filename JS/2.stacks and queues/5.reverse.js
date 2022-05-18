let s = [];
let top = -1;
function put(x){
    s[++top] = x;
    return s.length;
}

function pup(){
    if(top==-1){
        console.log("Empty stac can't pop");
    }else{
        top--
    }
    return s[top+1];
}

function peek(){
    if(top == -1){
        return 'empty stack';
    }else{
        return s[top];
    }
}

let str = 'abcd'
let ans = ''
str.split("").forEach(x=>{
    put(x);
})

while(top>=0){
    ans+=pup();
}
console.log(ans);


