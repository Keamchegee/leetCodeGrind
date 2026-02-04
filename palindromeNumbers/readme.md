Palindrome Check Using Two-Pointer Technique
Overview

This approach checks whether a number or string is a palindrome using the two-pointer technique, a fundamental algorithmic strategy for scanning sequences from both ends simultaneously.

Key Idea

Use two pointers, left and right, starting at the first and last characters of the string.

Move the pointers towards each other while comparing the characters at each position.

If any pair of characters differ, the string/number is not a palindrome.

If the pointers cross each other without mismatches, the string/number is a palindrome.


  =======MY GREAT TAKEAWAYS FROM THE PROBLEM===
 1. Why left < right is used

Avoid unnecessary comparisons: When left == right (middle element in odd-length sequences), it doesn’t need comparison because the middle element alone doesn’t affect palindrome property.

For example: "121" → middle '2' is automatically valid.


   2.Handling the Middle Element

Odd-length sequences: The middle element occurs when left == right.

Example: "12321" → middle '3'

The algorithm doesn’t need to explicitly compare it; the palindrome property holds as long as all pairs match.

Even-length sequences: The pointers cross without landing on the same index.