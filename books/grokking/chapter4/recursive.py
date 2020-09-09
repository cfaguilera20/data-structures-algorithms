import sys

def sumRecursive(arr):
    if len(arr) == 0:
        return 0
    item = arr.pop(0)
    return item + sumRecursive(arr)

def countRecursive(arr):
    if len(arr) == 0:
        return 0
    arr.pop(0)
    return 1 + countRecursive(arr)

def maxNumber(arr):
    max = -sys.maxsize - 1
    return maxNumberAux(arr, max)

def maxNumberAux(arr, max):
    if len(arr) == 0:
        return max
    value = arr.pop(0)
    if value > max:
        max = value
    return maxNumberAux(arr, max)

if __name__ == '__main__':
    print(sumRecursive([2, 4, 6]))
    print(countRecursive([2, 4, 6, 6]))
    print(maxNumber([2, 4, 100, 6]))
