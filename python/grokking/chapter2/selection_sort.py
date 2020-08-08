import sys

# Time complexity O(N^2).
def bruteForce(a):
    sorted = []
    min = -sys.maxsize - 1

    for j in range(len(a)):
        index = 0
        max = -sys.maxsize - 1
        for i in range(len(a)):
            if a[i] > max:
                index = i
                max = a[i]
            if i == len(a) - 1:
                a[index] = min

        sorted.append(max)

    return sorted

def findSmallest(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

# Time complexity O(N x 1/2 x N) => O(N^2).
def selectionSort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = findSmallest(arr)
        newArr.append(arr.pop(smallest))
    return newArr

if __name__ == '__main__':
    data = [1,3,2,5,5,2]
    print(bruteForce(data))

    data = [1,3,2,5,5,2]
    print(selectionSort(data))
