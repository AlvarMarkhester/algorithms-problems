//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const nums=[1,5,6,8,2,1,3,5,6]

var containsDuplicate = function(nums) {
    return (nums.length !== new Set(nums).size)
};