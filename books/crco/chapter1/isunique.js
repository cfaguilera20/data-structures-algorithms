// O(N^2) time | O(1) space
String.prototype.isUnique = function() {
    for(let i = 0; i < this.length; i ++) {
        for(let j = i + 1; j < this.length; j++) {
            if(this[i] === this[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log("qwerty".isUnique(), true);
console.log("qwertyytrewq".isUnique(), false);
