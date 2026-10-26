class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // 1. Edge case: different letter quantity 
        if (s.length !== t.length) return false;

        // 2. Make new array with 26 slots, fill with placeholder 0s. Store in const
        const count = new Array(26).fill(0);

        // 3. For loop: find ASCII character code at letter (i), increment / decrement to cancel dupes
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }
        // 4. Return: take every value, check if all 0 = true; otherwise false
        return count.every(value => value === 0);




    }
}
