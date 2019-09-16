import { Element, Collection } from '../../types/PriorityQueue';

export class PriorityQueue {
  public collection: Collection = [];

  public enqueue(element: Element): void {
    // Add the element to the collection based on 
    if (this.isEmpty()){
      this.collection.push(element);
    } else {
      let added: boolean = false;
      for (let i: number = 1; i <= this.collection.length; i++){
        if (element[1] < this.collection[i-1][1]){ 
          this.collection.splice(i-1, 0, element);
          added = true;
          break;
        }
      }
      if (!added){
          this.collection.push(element);
      }
    }
  }

  public dequeue(): Element | false {
    let value = this.collection.shift();
    if (typeof value !== 'undefined') { return value }
    return false;
  }

  public isEmpty(): boolean {
    return (this.collection.length === 0) 
  }
}