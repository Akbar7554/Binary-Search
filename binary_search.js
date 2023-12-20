function binarySearch(myArray, n, t) { //n is array number of elements t is target which we find in an array
    let left, right, mid
    left = 0
    right = n - 1
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (myArray[mid] == t) {
            return mid
        }
        if (myArray[mid] < t) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return - 1
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let n = 19
let t = 2
const answer = binarySearch(myArray, n, t)
console.log("Answer is :",answer);