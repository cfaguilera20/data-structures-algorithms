def minimumSwaps(arr):
    ref_arr = sorted(arr)
    index_dict = {v: i for i,v in enumerate(arr)}
    swaps = 0

    for i,v in enumerate(arr):
        correct_value = ref_arr[i]
        if v != correct_value:
            to_swap_ix = index_dict[correct_value]
            arr[to_swap_ix],arr[i] = arr[i], arr[to_swap_ix]
            index_dict[v] = to_swap_ix
            index_dict[correct_value] = i
            swaps += 1

    return swaps


def minimumSwaps2(arr):
    length = len(arr)
    swaps = 0

    for i in range(length):
        if(arr[i] != i + 1):
            j = i
            while(j < length):
                if(arr[j] == i + 1):
                    arr[i], arr[j]  = arr[j], arr[i]
                    swaps = swaps + 1
                    print('swap1')
                    j = length
                j = j + 1
    return swaps
