/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVejrsion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return n;
        let start = 1;
        let end = n;
        let current;
        while (start !== current) {
            //pick a value in the middle
            current = start + Math.floor((end - start) / 2);
            //chack if that value is bad
            //if not bad, set start to current + 1
            if (!isBadVersion(current)) start = current + 1;
            //else set end to current
            else end = current;
            
        }
        return current;
    };
};