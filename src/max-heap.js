const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	push(data, priority) {
		var node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root != null) {
			this.size+=-1;
			let data = this.root.data;
			let root = this.detachRoot();
			return data;	
		}
	}

	detachRoot() {
		let root = this.root;
		this.root = null;
		this.parentNodes.pop();
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = this.parentNodes;
		this.his.parentNodes.pop();
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
			this.size+=1;
			node.parent = null;
			this.root = node;
			this.parentNodes.push(node);
			
		} else {
			this.size+=1;
			node.parent = node;
			this.root.appendChild(node);
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
