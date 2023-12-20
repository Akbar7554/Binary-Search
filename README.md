# Binary Search Algorithm

## myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

- Here we have an array, which is myArray, where n is the number of elements.
- and t is our targeted value, and this time it is 2; we find 2 in myArray elements.
- Allow the array elements to be left, right, and midpoint in the binarySearch function. Here, the left element is zero, and the right element is an array of elements minus one.
- Now we loop through a while loop where left is not equal to right.
- We need to find the middle point of an array using the formula middlePoint = myArray / 2 and Math.floor() to get an integer value.
- Now check the condition by the if else statement (if array[mid] = targeted value), then return mid, and another condition is (if array[mid] < targeted value), then left will be mid plus one. Otherwise, right is equal to mid-minus one.
- Here our middle point is 19, and 19/2 = 9.5. By Math.floor (9.5), our value is 9. checking all the conditions, but this time we did not find our value. 2. Again checking all conditions, this time our mid value is 4.5 by math.floor(), our value is 4, and checking the condition, we did not find our answer. Again checking the condition, our mid is 2 and array[mid] = targeted value. and that is 2.
- Now checking the condition passed the while loop, I return function by returning minus one. and our value is 1. and 2 is in 1 index.
