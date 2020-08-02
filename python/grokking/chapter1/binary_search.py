# Time complexity O(log n). Space complexity O(1)
def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None

# The maximum number of steps required for a sorted list of 128 items:
# log2 128 = steps
# 2^steps = 128
# 2^7 = 128
# log2 128 = 7
# steps = 7

if __name__ == '__main__':
    my_list = [1, 3, 5, 7, 9]
    print(binary_search(my_list, 9))
    print(binary_search(my_list, 10))

