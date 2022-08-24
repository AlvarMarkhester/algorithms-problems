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

console.log(permute([1, 2, 3, 4]));
