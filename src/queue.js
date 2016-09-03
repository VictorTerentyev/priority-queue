const MaxHeap = require('./max-heap.js');
const Node = require('./node.js');
class PriorityQueue {

	constructor (maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size < this.maxSize) {
			this.heap.push(data,priority);
		} else {
			alert("maxSize reached");
		}
	}

	shift() {
		var val = 0;	
		if (this.heap.size != 0) {
			this.heap.pop();
		} else {
			alert("queue is empty");
		}
		return val;
	}

	size() {
		return this.heap.size;
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
