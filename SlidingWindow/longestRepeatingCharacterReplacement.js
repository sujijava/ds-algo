/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let longest = ''

    for(let left = 0; left<s.length; left++){

        let right = left+1
        let newString = s.split('')
        let replacementCount = 0

        while(right<s.length + 1 && k >= replacementCount && right - left + 1 > longest.length){

            if(newString[left] === newString[right]){
                right ++
            } else if(k > replacementCount && s[right]){
                newString[right] = newString[left]
                right ++
                replacementCount ++
            }else {
                break
            }
        }

        if(longest.length < right - left - 1){
            longest = newString.slice(left, right).join('')
        }
    }
    return longest.length
};

// "AABABBA", 1 // 4
// console.log(characterReplacement("AABABBA", 1))

// "ABAB", 2 // 4
// console.log(characterReplacement("ABAB", 2))

// "AAAA", 0 // 4
// console.log(characterReplacement("AAAA", 2))

console.log(characterReplacement("ABBB", 2))
