main();
function main() {
    let str = 'aqdcccd'
    let current='';
    let ans = reduce(str);
    while(true){
        if(current == ans){
            break;
        }else{
            current = ans;
            ans = reduce(ans);
        }
    }
    if(ans==''){
        console.log("Empty string!")
    }else{
        console.log(ans);
    }
}
function reduce(str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1] && str[i] !== str[i - 1]) {
            temp += str[i];   
        }
    }
    return temp;
}