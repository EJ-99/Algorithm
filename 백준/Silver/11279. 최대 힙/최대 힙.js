const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class PriorityQueue {
  constructor() {
    this.queue = [0];
  }

  push(value) {
    this.queue.push(value);
    this.#up();
  }

  pop() {
    const max = this.queue[1];
    const end = this.queue.pop();

    if (this.queue.length > 1) {
      this.queue[1] = end;
      this.#down();
    }

    return max;
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

      if (parentValue >= value) break;

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
      let biggerChildIdx = null;

      if (leftChildIdx < size) {
        if (this.queue[leftChildIdx] > value) biggerChildIdx = leftChildIdx;
      }

      if (rightChildIdx < size) {
        const biggerThanParent = value < this.queue[rightChildIdx];
        const biggerThanLeft =
          this.queue[leftChildIdx] < this.queue[rightChildIdx];

        if (biggerThanParent && biggerThanLeft) biggerChildIdx = rightChildIdx;
      }

      if (!biggerChildIdx) break;

      this.queue[idx] = this.queue[biggerChildIdx];
      this.queue[biggerChildIdx] = value;
      idx = biggerChildIdx;
    }
  }
}

const arr = input.slice(1);
const result = [];
const pq = new PriorityQueue();

for (const num of arr) {
  if (num === 0) {
    if (pq.empty()) result.push(0);
    else result.push(pq.pop());
    continue;
  }

  pq.push(num);
}

console.log(result.join('\n'));
