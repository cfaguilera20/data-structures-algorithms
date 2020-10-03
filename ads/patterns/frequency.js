clear();
// Return true if every value in the array hast it's corresponding value squared on the second;
// O(N^2) time | O(1) space
function same(arr1, arr2) {
    if(arr1.length!== arr2.length) {
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2);

        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}


console.log(same([1,2,3], [1,4,9]));

// O(N) time | O(N^2) space
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3,2,5], [9,1,4,4,25]));


function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let createDict = function(str) {
        let dict = {};
        for(let val of str){
            dict[val] = (dict[val] || 0) + 1
        }
        return dict;
    }

    let dict1 = createDict(str1);
    let dict2 = createDict(str2);

    console.log(dict1);
    console.log(dict2);

    for(let key in dict1){
        if(!(key in dict2)){
            return false
        }
        if(dict1[key] !== dict2[key]){
            return false
        }
    }
    return true;

}
console.log(validAnagram("sadder", "dreads"));
console.log(validAnagram("cama", "casa"));

function validAnagram2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const lookup = {};
    for(let letter of str1) {
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }

    for(let letter of str2) {
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;

}
console.log(validAnagram2("sadder", "sadders"));
