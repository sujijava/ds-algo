/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {

    let maxSum = nums[0]
    let curSum = 0

    for (let i=0; i<nums.length-1; i++){
        if(curSum < 0){
            curSum = 0
        }
        curSum = curSum + nums[i]
        maxSum = Math.max(curSum, maxSum)
    }

    return maxSum
};


// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


const maxSubArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity
    let currentSum = 0
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){
        //cumulating answers to the top

        //compare currentSum add current number
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i])

        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum)

    }
    return maxSum
}

console.log(maxSubArray([5,4,-1,7,8]))
