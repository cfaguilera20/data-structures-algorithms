function compareTriplets(a, b) {
    let asum = 0;
    let bsum = 0;
    
    for(let i = 0; i < 3; i++) {
        if(a[i] > b [i]) {
            asum++;
        } else if(a[i] < b [i]) {
            bsum++;
        }
    }
    return [asum, bsum];
}
