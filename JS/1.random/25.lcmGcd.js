function main() {
    let n1 = 400-28;
    let n2 = 186;

    let l = lcm(n1, n2);
    let g = gcd(n1, n2);
    console.log(l, g);
}
main();
function lcm(n1, n2) {
    a = n1 > n2 ? n1 : n2;
    b = n1 > n2 ? n2 : n1;
    let i = 1;
    while ((a * i) % b !== 0) {
        i++;
    }
    return a * i;
}
function gcd(a, b) {
    return b !== 0 ? gcd(b, a % b) : a;
}