'''
Print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3
where a,b,c and d are inegers between 1 and 1000.
'''

n = 1000

for a in range(1, n + 1):
    for b in range(n):
        for c in range(n):
            for d in range(n):
                if a**3 + b**3 == c**3 + d**3:
                    print(a, b, c, d)


