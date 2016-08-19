const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		var node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		this.parentNodes.pop();
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		this.detached = detached;
	}

	size() {
		return this.parentNodes.length();
	}

	isEmpty() {
		if (this.root == null && this.parentNodes == []) {
			return true;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		this.push(node);
	}

	shiftNodeUp(node) {
		this.parentNodes.unshift(node);
	}

	shiftNodeDown(node) {
		this.parentNodes[].swapWithParent();
	}
}

module.exports = MaxHeap;
