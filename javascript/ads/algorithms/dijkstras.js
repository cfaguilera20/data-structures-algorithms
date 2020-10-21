import PriorityQueue from '../datastructures/PriorityQueue.js';
import WeightedGraph from '../datastructures/WeightedGraph.js';

/**
 * Let's represent our graph with an andjacency list:
 *
 * A: [{B, 4}, {C, 2}]
 * B: [{A, 4}, {E, 3}]
 * C: [{A, 2}, {D, 2}, {F, 4}]
 * D: [{C, 2}, {E, 3}, {F, 1}]
 * E: [{B, 3}, {D, 3}, {F, 1}]
 * F: [{C, 4}, {D, 1}, {E, 1}]
 *
 * For these example we will find the shortes path from A to E.
 *
 * We have to keep track of these:
 *
 * 1.   Shortest distances from our start node to the other nodes.
 *      Initialy all the distances are unknown except the distance to itself.
 *
 * Vertex   Shortest Dist From Start(A)
 * A        0
 * B        Infinity
 * C        Infinity
 * D        Infinity
 * E        Infinity
 * F        Infinity
 *
 * 2.   Visited nodes to avoid recursion.
 * [A]
 *
 * 3. Previous
 *
 * Vertex   Prev Vertex
 * A        null
 * B        null
 * C        null
 * D        null
 * E        null
 * F        null
 */


class Dijkstra extends WeightedGraph {
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while (nodes.values.length) {
            smallest = nodes.dequeue().value;
            if (smallest === finish) {

            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    console.log(nextNode);
                    nodes.enqueue(nextNode);
                }
            }
        }

    }
}


const graph = new Dijkstra();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.Dijkstra("A", "E"));


