function main() {
    let keypad = ['.', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'stu', 'vwx', 'yz'];
    let input = '011234'
    keypadCombinations(input, '', 0);

    function keypadCombinations(input, combination, idx) {
        if(idx == input.length){
            console.log(combination);
            return;
        } 
        let currchar = keypad[Number(input[idx])];
        currchar.split("").forEach(x=>{
            keypadCombinations(input, combination+x, idx + 1);
        })
    }
}
main();
