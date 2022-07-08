/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const ROMAN_NUMERAL = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    const sorted_numerals = Object.keys(ROMAN_NUMERAL).sort((a, b) => b - a);
    
    const arr = s.split('');
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (ROMAN_NUMERAL[arr[i]] < ROMAN_NUMERAL[arr[i + 1]]) res -= ROMAN_NUMERAL[arr[i]];
        else res += ROMAN_NUMERAL[arr[i]];
    }
    return res;
};