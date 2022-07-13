/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const letters = {};
    for (let i = 0; i < s.length; i++) {
        if (!letters[s[i]]) letters[s[i]] = 0;
        letters[s[i]]++;
    }
    console.log(letters);
    let maxLength = 0;
    let maxOdd = 0;
    let maxOddLetter;
    for (const [k, v] of Object.entries(letters)) {
        if (v % 2 === 0) maxLength += v;
        else if (v > maxOdd) {
            maxOdd = v;
            maxOddLetter = k;  
        }
    }
    for (const [k, v] of Object.entries(letters)) {
        if (v % 2 !== 0) {
            if (k !== maxOddLetter) maxLength += v - 1;
            else maxLength += v;
        }
    }
    return maxLength;
};