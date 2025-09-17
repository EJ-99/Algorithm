const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class PriorityQueue {
  #comp;
  constructor(comp = (a, b) => a > b) {
    this.queue = [0];
    this.#comp = comp;
  }

  push(value) {
    this.queue.push(value);
    this.#up();
  }

  pop() {
    const root = this.queue[1];
    const end = this.queue.pop();

    if (this.queue.length > 1) {
      this.queue[1] = end;
      this.#down();
    }

    return root;
  }

  empty() {
    return this.queue.length === 1;
  }

  #up() {
    let idx = this.queue.length - 1;
    const value = this.queue[idx];

    while (idx > 1) {
      let parentIdx = Math.floor(idx / 2);
      let parentValue = this.queue[parentIdx];

      if (this.#comp(parentValue, value)) break;

      this.queue[parentIdx] = value;
      this.queue[idx] = parentValue;
      idx = parentIdx;
    }
  }

  #down() {
    let idx = 1;
    const value = this.queue[idx];
    const size = this.queue.length;

    while (true) {
      let leftChildIdx = idx * 2;
      let rightChildIdx = idx * 2 + 1;
      let swapChildIdx = null;

      if (leftChildIdx < size) {
        if (this.#comp(this.queue[leftChildIdx], value))
          swapChildIdx = leftChildIdx;
      }

      if (rightChildIdx < size) {
        const isPrioirToParent = this.#comp(this.queue[rightChildIdx], value);
        const isPrioirToLeft = this.#comp(
          this.queue[rightChildIdx],
          this.queue[leftChildIdx]
        );
        if (isPrioirToParent && isPrioirToLeft) swapChildIdx = rightChildIdx;
      }

      if (!swapChildIdx) break;

      this.queue[idx] = this.queue[swapChildIdx];
      this.queue[swapChildIdx] = value;
      idx = swapChildIdx;
    }
  }
}

const arr = input.slice(1);
const result = [];
const pq = new PriorityQueue((a, b) => a < b);

for (const num of arr) {
  if (num === 0) {
    if (pq.empty()) result.push(0);
    else result.push(pq.pop());
    continue;
  }

  pq.push(num);
}

console.log(result.join('\n'));
