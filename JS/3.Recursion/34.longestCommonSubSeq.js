var longestCommonSubsequence = function (text1, text2) {
    let s1 = new Set();
    let s2 = new Set();

    let min = text1.length < text2.length ? text1.length : text2.length;

    subseq(text1, 0, '', s1, min);
    subseq(text2, 0, '', s2, min);

    return s1.size < s2.size ? findCommon(s1, s2) : findCommon(s2, s1);

    function findCommon(s, r) {
        let len = 0;
        for (let x of s) {
            if (r.has(x)) {
                len = Math.max(x.length, len);
            }
        }
        console.log(len);
    }
    function subseq(str, idx, ans, s, min) {
        if (idx == str.length || ans.length >= min) {
            s.add(ans);
            return;
        } else {
            subseq(str, idx + 1, ans + str[idx], s, min);
            subseq(str, idx + 1, ans, s, min);
        }
    }
};

longestCommonSubsequence("abcd", 'cabcad');