function twoStrings(s1, s2) {
    let dict = {};

    for(let s of s1) {
        dict[s] = 1;
    }

    for(let s of s2) {
        if(dict[s] === 1) {
            return "YES";
        }
    }

    return "NO";
}

console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
