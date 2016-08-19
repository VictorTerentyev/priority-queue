const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	push(data, priority) {
		let node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root != null) {
			let data = this.root;
			let root = this.detachRoot();
			return data;	
		}
		this.size--;
	}

	detachRoot() {
		this.size--;
		let root = this.root;
		this.root = null;
		this.parentNodes.pop();
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		this.size--;
		this.root = this.parentNodes;
		this.parentNodes.pop();
		return this.root;
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
			this.size++;
		} else {
			node.parent = node;
			this.root.appendChild(node);
			this.parentNodes.push(node);
			this.size++;
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
