/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let pointer = 0;
    while (pointer < prices.length) {
        if (prices[pointer] < prices[pointer + 1]) {
            //find max to right
            const max = Math.max(...prices.slice(pointer));
            //console.log(max);
            const maxIndex = prices.indexOf(max, pointer);
            //console.log(maxIndex);
            //if min exists between pointer and max, move pointer to it
            const min = Math.min(...prices.slice(pointer, maxIndex));
            const minIndex = prices.indexOf(min, pointer);
            if (pointer !== minIndex) pointer = minIndex;
            //set maxProfit, reset incrementalProfit
            if (max - prices[pointer] > maxProfit) maxProfit = max - prices[pointer];
            
            //set pointer to index of max plus 1
            pointer = maxIndex + 1;
        } else pointer++;
    }
    return maxProfit;
};