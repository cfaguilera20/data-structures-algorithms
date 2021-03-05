// ['1 2', '2 3', '2 4', '4 6', '7 3', '7 9']

function connectedSum(n, edges) {
    let dictEdges = {};
    
    for(let i = 0; i < edges.length; i++) {
        let data = edges[i].split(' ');
        let info = (dictEdges[data[0]] || []);
        info.push(data[1]);
        dictEdges[data[0]] = info;
    }
    
    let entries = edges.entries();
    let visitedNodes = {};
    
    for(let i = 0; i < entries.length; i++) {
        let data = entries[i];
        let queue = [];
        let sum = 0;
        queue.push(data[0]);
        visitedNodes[data[0]];
        while(queue.length > 0) {
            let num = queue.pop();
            sum += num;
            
            for(let j = 0; j < edges[num]; j++) {
                
            }
            
        }    
    }
    
}
