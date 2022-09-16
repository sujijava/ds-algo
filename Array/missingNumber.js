/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let length = nums.length
    let res = 0; 

    for(let i =0; i<nums.length; i++){
        const temp = length - nums[i]
        res = res + temp;
        length --;      
    }

    return res;
};

console.log(missingNumber([0,1,3]))