let str = 'aaaacddddcappp'
main(str);
function main(str){;
    let curr = ''
    reduce(str,curr);
}
function reduce(str,curr){
    let temp=''
    if(str == curr){
        console.log(str);
        return;
    }
    for(let i=0; i<str.length; i++){
        if(str[i]!==str[i+1] && str[i]!==str[i-1]){
            temp+=str[i];
        }
    }
    curr = str;
    reduce(temp,curr);
}
// aaaacddddcappp
// cca
// a
// a
