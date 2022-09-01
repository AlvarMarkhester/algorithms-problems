//o(n!) cause we need to find all the permutations, number of permutations is n!
var permute = (nums) => {
    if (nums.length === 0) return [[]];
    const firstElement = nums[0];
    const rest = nums.slice(1);

    const restPermutations = permute(rest);

    const allPermutations = [];

    restPermutations.forEach((perm) => {
        for (let i = 0; i <= perm.length; i++) {
            let permWithFirst = [
                ...perm.slice(0, i),
                firstElement,
                ...perm.slice(i),
            ];

            allPermutations.push(permWithFirst);
        }
    });

    return allPermutations;
};


//Unique permutation, needs optimization cause we still do O(n!) when we can do partial permutation
var permuteUnique = function(nums, memo = {}) {
    if(nums.length === 0) return [[]]
    const first = nums[0]
    const rest = nums.slice(1)
    
    const restPerms = permuteUnique(rest, memo)
    
    const allPerms = []
    
    restPerms.forEach(perm => {
        for(let i = 0; i <= perm.length; i++) {
            const permWithFirst = [...perm.slice(0, i), first, ...perm.slice(i)]
            if(!(permWithFirst in memo)) {
                memo[permWithFirst] = 1
                allPerms.push(permWithFirst)
            }
        }
    })
    
    return allPerms
};
