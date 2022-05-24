function UncommonChars(A, str) {
    let first = new Array(26).fill(0);
    let second = new Array(26).fill(0);

    for (let i = 0; i < A.length; i++) {
        let idx = A.charCodeAt(i) - 97;
        first[idx]++;
    }

    for (let i = 0; i < str.length; i++) {
        let idx = str.charCodeAt(i) - 97;
        second[idx]++;
    }

    let ans = '';
    for (let i = 0; i < 26; i++) {
        if (first[i] === 0 && second[i] !== 0) {
            let char = String.fromCharCode(i + 97);
            ans += char;
        } else if (first[i] !== 0 && second[i] === 0) {
            let char = String.fromCharCode(i + 97);
            ans += char;
        } else {

        }
    }

    console.log(ans === '' ? -1 : ans);
}

UncommonChars('ceg', 'bdfha');
