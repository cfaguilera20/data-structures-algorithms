'''
Print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3
where a,b,c and d are inegers between 1 and 1000.
'''

n = 3

print('Time complexity: O(N^4)')
for a in range(1, n + 1):
    for b in range(1, n + 1):
        for c in range(1, n + 1):
            for d in range(1, n + 1):
                if a**3 + b**3 == c**3 + d**3:
                    print(a, b, c, d)
                    break


print('Time complexity: O(N^3)')
for a in range(1, n + 1):
    for b in range(1, n + 1):
        for c in range(1, n + 1):
            d = pow(a**3 + b**3 - c**3, 1/3)
            if a**3 + b**3 == c**3 + d**3:
                print(a, b, c, int(d))

print('Time complexity: O(N^2)')
results = {}
for c in range(1, n + 1):
    result = c**3 + d**3
    lst = results.get(result, [])
    results[result] = lst.append([c,d])

print(results)

for a in range(1, n + 1):
    for b in range(1, n + 1):
        result = a**3 + b**3
        lst = results.get(result)
        for pair in lst:
            print(a, b, pair)



