class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) { // First pointer
            for (let j = i + 1; j < nums.length; j++) { // Second pointer
                if (nums[i] === nums[j]) { // If values are same, return true
                    return true;
                }
            } 
        }
        return false;
    }
}
