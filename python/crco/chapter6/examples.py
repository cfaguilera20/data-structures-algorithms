# Example 1 - Time complexity O(N).
def foo(a):
    sum = 0
    product = 1

    for i in range(0, len(a)):
        sum = sum + a[i]

    for i in range(0, len(a)):
        product = product * a[i]

    print(sum, ',', product)

# Example 2 - Time complexity O(N^2).
def printPairs(a):
    for i in range(0, len(a)):
        for j in range(0, len(a)):
            print(a[i], ',', a[j])

# Example 3 - Time complexity O(N^2).
def printPairs2(a):
    for i in range(0, len(a)):
        for j in range(i + 1, len(a)):
            print(a[i], ',', a[j])

if __name__ == '__main__':
    data = [1,2,3,4,5,6,7,8]
    foo(data)
    printPairs(data)
    printPairs2(data)
