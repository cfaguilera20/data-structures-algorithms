function flatten(array, result = []) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(flatten([1, [2], [3, [[4]]]]));
