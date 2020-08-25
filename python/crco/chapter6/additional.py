# Time complexity: O(b)
def product(a: int, b: int) -> int:
    sum = 0
    for i in range(b):
        sum += a
    return sum

# Time complexity: O(b)
def power(a: int, b: int) -> int:
    if b < 0:
        return 0
    elif b == 0:
        return 1
    else:
        return a * power(a, b - 1)

# Time complexity: O(1)
def mod(a: int, b: int) -> int:
    if b <= 0:
        return -1
    div = a // b
    return a - div * b

# Time complexity: O(a / b)
def div(a: int, b: int) -> int:
    count = 0
    sum = b
    while sum <= a:
        sum += b
        count += 1
    return count

print(div(1,3))
print(mod(3,2))
print(power(2, 4))
print(product(5, 3))
