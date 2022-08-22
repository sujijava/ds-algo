/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    const visited = {}

    for(let i =0; i<nums.length; i++){
        let currentChar = nums[i]
        if(visited[currentChar]){
            return true
        } else {
            visited[currentChar] = 'existing'
        }
    }

    return false
}


console.log(containsDuplicate([0,0]))
