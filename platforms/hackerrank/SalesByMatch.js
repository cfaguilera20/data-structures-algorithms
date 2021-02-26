function sockMerchant(n, ar) {
    const hashMapCount = {};
    let pairs = 0;
    
    for(let i = 0; i < n; i++) {
        if(hashMapCount[ar[i]]) {
            hashMapCount[ar[i]]++;
        } else {
            hashMapCount[ar[i]] = 1;
        }
    }
    
    for (const [key, value] of Object.entries(hashMapCount)) {
        pairs += Math.floor(value / 2);
    }
    
    return pairs;
}
