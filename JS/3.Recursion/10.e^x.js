let x = 4;
let n = 2;
let i = 1;
var ans = 0;
let term = 1;
eTopowerX(x, n, i, ans, term);

function eTopowerX(x, n, i, ans, term) {
    if(i==n+1){
        ans+=term;
        console.log(ans);
        return;
    }
    ans+=term;
    term = (term*x)/i;
    return eTopowerX(x, n, i+1, ans, term)
}