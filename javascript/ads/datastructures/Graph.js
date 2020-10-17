/**
 * Same graph represented in different ways
 *
 *  Adjancency Matrix
 *      a   b   c   d
 *  a   0   0   0   1
 *  b   1   0   1   1
 *  c   1   1   0   1
 *  d   0   0   0   0
 *
 * Adjancency List
 * a: [d]
 * b: [a, c, d]
 * c: [a, b, d]
 * d: []
 */
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(v) {
        while (this.adjacencyList[v].length) {
            const adjacentVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, adjacentVertex);
        }
        delete this.adjacencyList[v];
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = new Map();
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex)
                return null;
            visited.set(vertex, true);
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }
}

export default Graph;
