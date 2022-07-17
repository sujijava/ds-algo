
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const alphaNumbericOnly  = s.replace(/[^a-z0-9]/gi,'');
    let left = 0
    let right = alphaNumbericOnly.length - 1

    while(left <= right){
        let leftChar = alphaNumbericOnly[left].toLowerCase()
        let rightChar = alphaNumbericOnly[right].toLocaleLowerCase()

        if (leftChar !== rightChar){
            return false
        } else {
            left ++
            right --
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
