function main() {
    console.log(0);
    console.log(1);
    let n = 103;
    printFib(0, 1, n - 2);
}
main();
function printFib(a, b, n) {
    if (n == 0) return;
    let c = a + b;
    console.log(c);
    printFib(b, c, n - 1);
}