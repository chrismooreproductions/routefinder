import { Element } from './PriorityQueue';
import { IWaypoint } from './Graph';

export interface ITimes {
  [index: string]: number
}

export type Backtrace = Element[];

export interface IRouteFinderResponse { 
  message: string;
  isValidRoute: boolean;
  waypoints: IWaypoint[];
  totalDistance: number;
}