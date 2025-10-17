//key idea : is to check if the complement (target - current_number) exists in the hashmap.
//Achieved thru:
//Instead of checking all pairs (which is O(n²)), we keep track of the numbers we’ve seen and their indices
//At each step:

//Compute the complement = target - current_number.

//If the complement exists in the hashmap → we found a pair.

//Otherwise, store the current number and its index in the hashmap.


/// Time complexity   ====O(n) ====since each element is visited once
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}
