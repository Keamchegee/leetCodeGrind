🧮 Two Sum
📘 Problem

Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

💡 BRUTEFORCE Approach(BRUTEFORCE.JS FILE)

This version uses a brute-force approach:

Loop through each element in nums

For each element, check every other element to see if they sum to target

Return the indices when a valid pair is found

This approach ensures correctness but is not optimized for performance.


    ⏱️ Complexity

| Metric | Complexity |
| ------ | ---------- |
| Time   | O(n²)      |
| Space  | O(1)       |

🚀 Notes
Works correctly for all valid inputs

Inefficient for large arrays due to nested loops

Optimized version IS using a HashMap for O(n) operations performance
