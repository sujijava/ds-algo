/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {

    let map = {};
    let res = [];
    let bucket = Array.from({ length: nums.length + 1 }, () => []); // to create unique arrays

    nums.forEach(num => {
        map[num] = (num in map) ? 1 + map[num] : 1
    });

    for(const c in map){
        bucket[map[c]].push(c);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach((elem)=> res.push(elem));
            if(k == res.length){
                return res;
            }
        }
    }
};


const nums = [8,8,9,9,9,1]
console.log(topKFrequent(nums, 2))
