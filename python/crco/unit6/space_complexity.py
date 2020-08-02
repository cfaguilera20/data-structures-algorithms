
# Time complexity O(n). Space complexity O(n)
def sum(n):
    if(n <= 0):
        return 0
    return n + sum(n - 1) # Call are simultaneously.

# Time complexity O(n). Space complexity O(1)
def pairSumSequence(n):
    sum = 0
    for i in range(0, n):
        sum = sum + pairSum(i, i + 1) # Calls aren't simultaneously
    return sum

def pairSum(a, b):
    return a + b

if __name__ == '__main__':
    print(f"Sum: {sum(2)}")
    print(f"Pair sum: {pairSumSequence(4)}")
