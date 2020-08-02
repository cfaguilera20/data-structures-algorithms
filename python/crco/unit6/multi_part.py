# Time complexity O(a + b).
# If the algorithm is in the form "do this, then, when you're all done, do that" then you add the runtimes.
def multiPartAdd(arrA, arrB):
    for i in arrA:
        print(i)
    for i in arrB:
        print(i)

# Time complexity O(a * b).
# If the algorithm is in the form "do this for each time you do that" then you multiply the runtimes.
def multiPartMultiply(arrA, arrB):
    for i in arrA:
        for j in arrB:
            print(i + j)

if __name__ == '__main__':
    arrA = arrB = [1, 2, 3]

    multiPartAdd(arrA, arrB)
    multiPartMultiply(arrA, arrB)
