function main(i) {
    let ans = ways(i);
    console.log(i, "----", ans);
}
for (let i = 0; i < 20; i++) {
    main(i);
}

function ways(n) {
    if (n == 0) return 1;
    else if (n < 0) return 0;
    else return ways(n - 1) + ways(n - 2) + ways(n - 3);
}