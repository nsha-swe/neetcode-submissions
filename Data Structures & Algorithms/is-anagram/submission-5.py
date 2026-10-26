class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
      
      # Early return
      if len(s) != len(t):
        return False

      # Empty dicts
      count_s = {}
      count_t = {}

      # For Loop – s
      for c in s:
        count_s[c] = count_s.get(c, 0) + 1

      # For Loop – t
      for c in t:
        count_t[c] = count_t.get(c, 0) + 1

      # Equality check 
      return count_s == count_t