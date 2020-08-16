import math

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

# Example 4 - Time complexity O(AB).


def printUnorderedPairs(a, b):
    for i in range(len(a)):
        for j in range(len(b)):
            print(a[i], ',', a[j])

# Example 5 - Time complexity O(AB * 100). We can drop the constants => O(AB)


def printUnorderedPairs2(a, b):
    for i in range(len(a)):
        for j in range(len(b)):
            for k in range(0, 100):
                print(a[i], ',', a[j])

# Example 6 - Time complexity O(N).


def reverse(a):
    for i in range(len(a) // 2):
        other = len(a) - i - 1
        temp = a[i]
        a[i] = a[other]
        a[other] = temp
    return a


# Example 8
"""
Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full
array. What would the runtime be?

a = ["zca", "ba", "aa"]

s log s => sort each string
"zca" => "acz"

a * s log s => we have to do this for every string
a["acz", "ab", "aa"]

Think of it this way.
When you are sorting numbers, to detect which number is bigger, you need only 1 comparison.
But when sorting strings, to detect which string is bigger, at times you need to compare all the characters of the string (i.e comparing hello and hella would need 5 char comparisons).
So in that case, every string comparison would take time that is directly proportional to the length of the strings. If the length is consistent, (suppose l), then the complexity would become O(l*nlogn)

[Stackoverflow](https://stackoverflow.com/questions/34318489/is-it-true-that-sorting-strings-is-on2logn/34318565)

a["aa", "ab", "acz"]
"""

# Example 9


class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None


'''
Recurseive function with multiple branches is typically O(branches^depth)
Time complexity: 2^N

There are N nodes, for a balanced binary three the depth is roughly log N

Time complexity: 2^log N

Log2 means:

2^P = Q -> log2 Q = P

Let P = 2^log N


'''


def sum(node):
    if node == None:
        return 0
    return sum(node.left) + node.value + sum(node.right)

# Example 10 - Time complexity O(sqrt(N)).


def isPrime(n):
    x = 2
    while x * x <= math.sqrt(n):
        if n % x == 0:
            return False
        x = x + 1
    return True

# Example 11 - Time complexity O(sqrt(N)).


def factorial(n):
    if n < 0:
        return -1
    elif n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example 12 - Time complexity: O(N^2 * N!)


def permutations(str):
    permutationsAux(str, "")


def permutationsAux(str, prefix):
    if len(str) == 0:
        print(prefix)
    else:
        for i in range(len(str)):
            rem = str[:i] + str[i + 1:]
            permutationsAux(rem, prefix + str[i])

# Example 13 - Time complexity: O(2^N)


def fib(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

# Example 14 - Time complexity: O(2^N+1) => O(2^N)
def allFib(n):
    for i in range(n):
        print(fib(i))

# Example 15 - Time complexity: O(N)
def allFibCached(n):
    cache = [0] * n
    for i in range(n):
        print(fibCached(i, cache))

def fibCached(n, cache):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    elif cache[n] > 0:
        return cache[n]
    cache[n] = fibCached(n - 1, cache) + fibCached(n - 2, cache)
    return cache[n]

data = [1, 2, 3, 4, 5, 6, 7, 8]
root = Node(3)
root.left = Node(1)
root.right = Node(2)

print("allFibCached")
allFibCached(20)

print("allFib")
allFib(20)
print(fib(20))

permutations("abc")
print(factorial(3))
print(isPrime(5))
foo(data)
printPairs(data)
printPairs2(data)
printUnorderedPairs(data, data)
printUnorderedPairs2(data, data)
print(reverse(data))
print(sum(root))
