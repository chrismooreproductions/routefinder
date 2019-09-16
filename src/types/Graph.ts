export interface INode {
  node: string;
  weight: number;
}

export interface IAdjacentNodeList {
  [index: string]: INode[];
}

export interface IWaypoint {
  node1: string;
  node2: string;
  weight: number;
}