/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const res = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (res.length !== 2) {
            const first = nums[i];
            for (let j = i + 1; j < nums.length; j++) {
                if (first + nums[j] === target) {
                    res.push(i);
                    res.push(j)
                    break;
                }
            }
        } else break;  
    }
    return res;
};