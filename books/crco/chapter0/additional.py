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

# Time complexity: O(Log N)
def sqrt(n: int) -> int:
    return sqrt_helper(n, 1, n)

def sqrt_helper(n: int, min: int, max: int):
    if max < min:
        return -1
    guess =  (min + max) // 2
    if guess * guess == n:
        return guess
    elif guess * guess < n:
        return sqrt_helper(n, guess + 1, max)
    else:
        return sqrt_helper(n, min, guess - 1)

# Time complexity: O(Log N)
def sum_digits(n: int) -> int:
    sum = 0
    while n > 0:
        sum += n % 10
        n //= 10
    return sum

print(sum_digits(1234567890))
print(sqrt(9))
print(div(1,3))
print(mod(3,2))
print(power(2, 4))
print(product(5, 3))
