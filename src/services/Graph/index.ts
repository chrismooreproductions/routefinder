import { IAdjacentNodeList, IWaypoint } from '../../types/Graph';

export class Graph {
  public nodes: string[] = [];
  public adjacentNodeList: IAdjacentNodeList = {};
  public waypoints: IWaypoint[] = []

  public addNode(node: string): void {
    this.nodes.push(node); 
    this.adjacentNodeList[node] = [];
  }

  public addEdge(node1: string, node2: string, weight: number): void {
    this.adjacentNodeList[node1].push({node:node2, weight: weight});
    this.adjacentNodeList[node2].push({node:node1, weight: weight});
    this.waypoints.push({node1: node1, node2: node2, weight: weight});
    // hack to account for the reverse direction...
    this.waypoints.push({node1: node2, node2: node1, weight: weight});
  }

  public findEdge(node1: string, node2: string): IWaypoint {
    const waypointLookup = this.waypoints.filter(waypoint => node1 === waypoint.node1 && node2 === waypoint.node2);
    return {
      node1: waypointLookup[0].node1, 
      node2: waypointLookup[0].node2,
      weight: waypointLookup[0].weight
    };
  }
}