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
        other = len(a) - i -1
        temp = a[i]
        a[i]  =a[other]
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


if __name__ == '__main__':
    data = [1,2,3,4,5,6,7,8]
    # foo(data)
    # printPairs(data)
    # printPairs2(data)
    # printUnorderedPairs(data, data)
    # printUnorderedPairs2(data, data)
    # print(reverse(data))
