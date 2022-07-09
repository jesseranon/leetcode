/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const comparisonObj = {};
    for (let i = 0; i < s.length; i++) {
        if (!comparisonObj[s[i]] &&
            !Object.values(comparisonObj).includes(t[i])) comparisonObj[s[i]] = t[i];
        else if (comparisonObj[s[i]] !== t[i]) return false;
    }
    return true;
};