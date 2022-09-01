//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    let map = {}
    
    for (i in nums) {
        if (map[target-nums[i]]) {
            return [map[target-nums[i]], i]
        } else {
            map[nums[i]] = i;
        }
    }
    
};