var twoSum = function (nums, target) {
    for (let j = 0; j < nums.length; j++) {
        let previous = nums[j];
        for (let i = 0; i < nums.length; i++) {
            if (i!==j && nums[i] + previous == target) { return [j, i] }

        }
    }
};