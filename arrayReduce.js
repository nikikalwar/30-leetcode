//https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let count=init;
    if(nums.length===0) return init;
    for(let i =0;i<nums.length;i++){
       count = fn(count,nums[i])
    }
    return count
};