/**
 * @param {string} s
 * @return {string}
 */

 var longestPalindrome = function(s) {

    let res = ''
    let resCount = 0

    for(let i =0; i<s.length; i++){

        let left = i
        let right = i

        //odd number
        while(left >= 0 && right <s.length && s[left] === s[right]){
            if(resCount < right - left + 1){
                res = s.slice(left, right + 1)
                resCount = right - left + 1
            }
            left = left - 1;
            right = right + 1;
        }

        //even number
        left = i
        right = i+1

        while(left >= 0 && right <s.length && s[left] === s[right]){
            if(resCount < right - left + 1){
                res = s.slice(left, right + 1)
                resCount = right - left + 1
            }
            left = left - 1;
            right = right + 1;
        }
    }

    return res

};
