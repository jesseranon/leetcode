/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let lastFoundIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (t.indexOf(s[i], lastFoundIndex) >= lastFoundIndex) lastFoundIndex = t.indexOf(s[i], lastFoundIndex) + 1;
        else return false;
    }
    return true;
};