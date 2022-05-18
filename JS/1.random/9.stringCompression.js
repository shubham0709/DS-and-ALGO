//443. (leetcode) String Compression 
//https://leetcode.com/problems/string-compression/
let str = 'aaaaabbbccaaaaaaaaaaaa'
// ans = [a,4,b,3,c,2,a,1,5]
let ans = []
for (let i = 0; i < str.length;) {
    var count = 0
    let curr = str[i];
    while (str[i] == curr) {
        count++;
        i++;
    }
    ans.push(curr);
    if (count !== 1) {
        if (count <= 9) {
            ans.push(String(count));
        } else {
            count = String(count);
            ans.push(count[0]);
            ans.push(count[1]);
        }
    }
    //ans.push(count);
}
console.log(ans);
//aaaaabbbzccaaaaaaaaaaaa
//[a,5,b,3,c,2,z,a,1,0,]