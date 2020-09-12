// O(N^2) time | O(1) space
String.prototype.checkPermutation = function(posible) {
    if(this.length !== posible.length) {
        return false;
    }

    let lookup = {};

    for(let letter of this) {
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }

    for(let letter of posible) {
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

console.log("abc".checkPermutation('cab'), true);
console.log("abc".checkPermutation('xyz'), false);
