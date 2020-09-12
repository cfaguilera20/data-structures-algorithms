# Time complexity O(2^N).
def f(n):
    if n <= 1:
        return 1
    return f(n - 1) + f(n - 1)

# Function calls itself twice for every level.
if __name__ == '__main__':
    print(f(4))
