## ---------Binary Search Algorithm----------
### Suppose an array is myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
- In this array we have 20 element.
- Our array first index is 0 and the last index is myArray.length - 1
- We need to find the middle point of an array like the formula of, middlePoint = myArray / 2
- Suppose we need to find 2 in this array. By the formula middlePoint, our middlePoint is 20/2 = 10 . we take also as 11 is our middlePoint but this time we need to find 2 in this myArray. so the middlePoint is 10.
- But 10 is not our answer. now we find again our middlePoint. This time is 9/2 which is 4.5 But we need to take interger value. by math.floor() method the element is 4. 4 is not our answer.
- Now again find middlePoint 4/2 = 2. This is the answer.


