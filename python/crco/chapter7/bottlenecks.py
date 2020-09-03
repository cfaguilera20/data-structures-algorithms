# Count the number of pairs of integers that have difference k:
k = 2
lst = [1, 7, 5, 9, 2, 12, 3]
print(lst)

print('# Time complexity: O(N^2)')
for i in lst:
    for j in lst:
        if i + k == j:
            print(i, j)


print('# Time complexity: O(N)')
dict = {lst[i] : True for i in range(len(lst))}
for i in lst:
    if i + k in dict:
        print(i, i + k)


