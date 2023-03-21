'''
2348. Number of Zero-Filled Subarrays

Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
'''

from typing import List

class ZeroFilledSubArrays:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
        count = 0
        res = 0
        for i in range(len(nums)):
            if nums[i] == 0:
                count += 1
                res += count
            else:
                count = 0
        
        return res

arr = ZeroFilledSubArrays()
print(arr.zeroFilledSubarray([1,3,0,0,2,0,0,4]))