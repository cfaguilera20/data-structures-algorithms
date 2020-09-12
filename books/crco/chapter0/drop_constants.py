import sys


# Time complexity O(n). Space complexity O(1)
def minAndMax(data):
    min = sys.maxsize
    max = -sys.maxsize - 1

    for x in data:
        if(x < min):
            min = x
        if(x > max):
            max = x
    return {"min": min, "max": max}

# Time complexity O(2n) => O(n). Space complexity O(1)
def minAndMax2(data):
    min = sys.maxsize
    max = -sys.maxsize - 1

    for x in data:
        if(x > max):
            max = x
    for x in data:
        if(x < min):
            min = x
    return {"min": min, "max": max}

if __name__ == '__main__':
    data = [1, 4, 2]
    # Time complexity O(n)
    minAndMax = minAndMax(data)
    print(minAndMax)

    # Time complexity O(2n)
    minAndMax2 = minAndMax2(data) # Drop the constant: # Time complexity O(n)
    print(minAndMax2)
