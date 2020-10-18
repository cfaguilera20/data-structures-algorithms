/**
 * Same graph represented in different ways
 *
 *  Adjancency Matrix
 *      a    b   c   d
 *  a   0    0   0   {}
 *  b   {}   0   {}  {}
 *  c   {}   {}  0   {}
 *  d   0    0   0   0
 *  {} => {node: a, weight: 10}
 *
 * Adjancency List
 * a: [{node: d, weight: 10}]
 * b: [{node: a, weight: 10}, {node: c, weight: 10}, {node: d, weight: 10}]
 * c: [{node: a, weight: 10}, {node: b, weight: 10}, {node: d, weight: 10}]
 * d: []
 */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }
}

export default WeightedGraph;
