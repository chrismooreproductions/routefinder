import { PriorityQueue } from '../PriorityQueue';
import { Graph } from '../Graph';
import { ITimes, Backtrace, IRouteFinderResponse } from '../../types/RouteFinder';
import { IWaypoint } from '../../types/Graph';

export class RouteFinder {
  private graph = new Graph();

  constructor(public map: {node1: string, node2: string, distance: number}[]) {
    map.forEach(node => {
      // Need some error handling here to handle if node[0] == node[1] and node[2] != 0
      if (!this.graph.nodes.includes(node.node1)) {
        this.graph.addNode(node.node1)
      }
      if (!this.graph.nodes.includes(node.node2)) {
        this.graph.addNode(node.node2)
      }
      this.graph.addEdge(node.node1, node.node2, node.distance);
    })

  }

  // We return a string from the findRoutes() method, however depending
  // on the app requirements we may actually want to return an object
  public findRoutes(startNode: string, endNode: string): IRouteFinderResponse {
    const times: ITimes = {};
    const backtrace: Backtrace = [];
    const priorityQueue = new PriorityQueue();
  
    times[startNode] = 0;
    
    this.graph.nodes.forEach(node => {
      if (node !== startNode) {
        times[node] = Infinity
      }
    });
    priorityQueue.enqueue([startNode, 0]);

    try {
      while (!priorityQueue.isEmpty()) {
        let shortestStep = priorityQueue.dequeue();
        if (shortestStep !== false) {
          let currentNode = shortestStep[0];
          this.graph.adjacentNodeList[currentNode].forEach(neighbor => {
            let time = times[currentNode] + neighbor.weight;
            if (time < times[neighbor.node]) {
              times[neighbor.node] = time;
              backtrace[neighbor.node] = currentNode;
              priorityQueue.enqueue([neighbor.node, time]);
            }
          });
        }
      } 
    } catch (err) {
      return {
        message: `No valid route could be found for the start point ${startNode} and endpoint ${endNode}`,
        isValidRoute: false,
        waypoints: [],
        totalDistance: 0
      };
    }
  
    let path = [endNode];
    let lastStep = endNode;
    while(lastStep !== startNode) {
      path.unshift(backtrace[lastStep])
      lastStep = backtrace[lastStep]
    }

    let waypoints: IWaypoint[] = []
    // I know this is a bit ridiculous but I needed to return the path objects and didn't have time
    // to change the above logic.
    for (let i: number = 0; i < path.length - 1; i++) {
      const firstNode = path[i]
      const secondNode = path[i+1]
      const waypoint = this.graph.findEdge(firstNode, secondNode)
      waypoints.push(waypoint)
    }

    return {
      message: `Path is ${path} and time is ${times[endNode]}`,
      isValidRoute: true,
      waypoints: waypoints,
      totalDistance: times[endNode]
    }
  }
}
