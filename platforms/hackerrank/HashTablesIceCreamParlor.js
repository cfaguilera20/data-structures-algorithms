/**
 * https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
 */
function whatFlavors(cost, money) {
    let costDict = {};
    
    for(let i = 0; i < cost.length; i++) {
        let item = (costDict[cost[i]] || []);
        item.push(i + 1);
        costDict[cost[i]] = item;
    }
    
    cost.sort((a, b) => a - b);
    let idx = 0;
    let idy = cost.length - 1;
    
    while(idx < idy) {
        let total = cost[idx] + cost[idy];
        if(total === money) {
            let dictLength = costDict[cost[idx]].length - 1; 
            let posx = costDict[cost[idx]][0];
            let posy = costDict[cost[idy]][dictLength];
              
            if(posx <= posy) {
               console.log(posx, posy);   
            } else {
                console.log(posy, posx);    
            }
            return; 
        } else if(total > money) {
            idy--;
        } else {
            idx++;
        }
    }
}
