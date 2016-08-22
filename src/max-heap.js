const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
		this.lastInsertedNode = null;
		this.rec = 0;
	}

	push(data, priority) {
		let node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		this.size--;
		if (this.root != null) {
			let data = this.root;
			this.restoreRootFromLastInsertedNode(this.detachRoot());
			return data;	
		}
	}

	detachRoot() {
		let root = this.lastInsertedNode;
		this.parentNodes.shift();
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		this.parentNodes[-1] = this.parentNodes[0];
		this.parentNodes[1] = this.parentNodes[0];
		this.parentNodes[0] = this.lastInsertedNode;
	}

	size() { 
		return this.size;
	}

	isEmpty() {
		if (this.root == null) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	insertNode(node) {
		if (this.size == 0) {
			node.parent = null;
			this.root = node;
			this.parentNodes.push(node);
		} else {
			node.parent = node;
			this.root.appendChild(node);
			this.parentNodes.push(node);
		}
		this.lastInsertedNode = this.parentNodes[this.parentNodes.length-1];
		this.size++;
	}

	shiftNodeUp(node) {
		node.swapWithParent();
	}

	shiftNodeDown(node) {
		node.left.swapWithParent();
	}
}

module.exports = MaxHeap;
