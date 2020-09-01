def letter_count(s):
    d = {}
    for i in s:
        d[i] = d.get(i,0)+1
    return d

# Time complexity: O(A + B)
def makeAnagram(a, b):
    dictA = letter_count(a)
    dictB = letter_count(b)
    deleted = 0

    for key, value in dictA.items():
        deleted += abs(value - dictB.pop(key, 0))

    for key, value in dictB.items():
        deleted += abs(value - dictA.pop(key, 0))

    return deleted

a ="fcrxzwscanmligyxyvym"
b ="jxwtrhvujlmrpdoqbisbwhmgpmeoke"
print(makeAnagram(a, b))
