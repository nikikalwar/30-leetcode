//https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let length = arr.length;
    let arr1=[];
    for(let i =0;i<length;i++){
       if(fn(arr[i],i)){
           arr1.push(arr[i])
       }
    } 
    return arr1;
 };