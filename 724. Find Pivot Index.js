/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const leftSum = (i === 0) ? 0 : reduceToSum(nums.slice(0, i));
        const rightSum = (i === nums.length - 1) ? 0 : reduceToSum(nums.slice(i + 1));
        if (leftSum === rightSum) return i;
    }
    return -1;
    
    function reduceToSum(slice) {
        return slice.reduce((acc, num) => acc + num, 0);
    }
};