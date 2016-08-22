const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
		this.lastInsertedNode = null;
		this.currentNode = null;
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
		this.lastInsertedNode = null;
		this.rec = 0;
	}

	insertNode(node) {
		if (this.size == 0) {
			node.parent = null;
			this.root = node;
			this.parentNodes.push(node);
			this.currentNode = node;
		} else {
			this.root.appendChild(node);
			this.parentNodes.push(node);
			for (var i = 0; i < this.parentNodes.length; i++) {
				if(this.parentNodes[i] == this.currentNode) {
					if (this.parentNodes[i].left == null) {
						for (var j = 1; j < this.parentNodes.length; j++) {
							if (this.parentNodes[j].parent == null) {
								this.parentNodes[i].left = this.parentNodes[j];
								this.parentNodes[j].parent = this.parentNodes[i];
							}
						}
					} else if (this.parentNodes[i].right == null) {
						for (var k = 1; k < this.parentNodes.length; k++) {
							if (this.parentNodes[k].parent == null) {
								this.parentNodes[i].right = this.parentNodes[k];
								this.parentNodes[k].parent = this.parentNodes[i];
							}
						}
					} else {
						this.currentNode = this.parentNodes[i+1];
					}
				}
			}
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
