function main() {
    let n = '12857357389458345858034875458394578';
    let k = 2;
    let p = sumDigit(n) * k;
    let ans = superDigit(p);
    console.log(ans);
}
main();

function superDigit(n) {
    if (n >= 0 && n <= 9) {
        return n;
    } else {
        p = sumDigit(String(n));
        return superDigit(p);
    }
}
function sumDigit(n) {
    let sum = 0;
    n.split("").forEach(x => {
        sum += (+x);
    })
    return sum;
}
