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
}

export default Graph;
