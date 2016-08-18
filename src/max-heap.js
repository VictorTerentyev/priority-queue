const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
	}

	push(data, priority) {
		this.data = data;
		this.priority = priority;
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		this.detached = detached;
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		this.node = node;
	}

	shiftNodeUp(node) {
		this.node = node;
	}

	shiftNodeDown(node) {
		this.node = node;
	}
}

module.exports = MaxHeap;
