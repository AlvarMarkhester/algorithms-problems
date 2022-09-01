var pivotIndex = function(nums) {
    let sum = 0;
    for(i in nums) {
        sum += nums[i]
    }
    
    let leftsum = 0;
    for(i in nums){
        if(leftsum === sum - leftsum - nums[i]) {
            return i
        }
        leftsum += nums[i]
    }
    
    return -1
};