//first and last index of a given character
function main() {
    let str = 'dfbazbdcba';
    let char = 'z';
    let first = -1;
    let last = -1;

    findFL(str, char, 0);

    function findFL(str, char, idx) {
        if (idx == str.length) {
            //console.clear();
            console.log(first, last);
            return;
        }
        if (str[idx] == char) {
            if (first == -1) {
                first = idx;
                last = idx;
            } else {
                last = idx;
            }
        }
        findFL(str, char, idx + 1);
    }
}

main();