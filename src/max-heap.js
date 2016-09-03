const Node = require('./node');

class MaxHeap {
	
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
		this.lastInsertedNode = null;
		this.currentNode = null;
		this.counter = 0;
	}

	push(data, priority) {
		let node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root != null) {
			this.restoreRootFromLastInsertedNode(this.detachRoot());
			if (this.root != null) {
				this.shiftNodeDown(this.root);
			}
			this.size--;
			return this.root;	//temporary hack	
		}
	}

	detachRoot() {
		let root = this.root;
		this.parentNodes.shift();
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		let root = detached;
		let lastInsertedNode = this.parentNodes.pop();
		this.parentNodes.unshift(lastInsertedNode);
		this.root = lastInsertedNode;
		/*this.root.left = this.parentNodes[1];
		this.root.left.parent = lastInsertedNode;*/
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
		this.lastInsertedNode = null;
		this.currentNode = null;
		this.counter = 0;
	}

	insertNode(node) {
		this.findCurrentNode();
		if (this.size == 0) {
			node.parent = null;
			node.left = null;
			node.right = null;
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			this.appendNode(node);
			this.parentNodes[0].parent = null;
		}
		this.lastInsertedNode = this.parentNodes[this.parentNodes.length-1];
		this.size++;
	}

	shiftNodeUp(node) {
		if (this.root != node) {
			if (node.parent != this.root && node.parent != null && node.parent.parent != null && node.parent.parent.right != null) {
				let right = this.root.right;
				node.swapWithParent();
				let parent = node.parent;
				parent.left = null;
				parent.parent = node;
				node.left = parent;
				node.parent = this.root;
				this.root.left = node;
				this.root.right = right;
				this.shiftNodeUp(node);
			} else if (node.parent == this.root && node.left != null && node.parent.right != null) {
				let left = node.left;
				node.swapWithParent();
				let parent = this.root;
				parent.left = left;
				parent.left.parent = parent;
				parent.right = null;
				node.right.parent = node;
				node.parent = null;
				node.left.parent = node;
				node.left = parent;
				this.root = node;
				this.parentNodes[2] = this.parentNodes[0];
				this.parentNodes[0] = this.root.left;
				this.shiftNodeUp(node);
			}
		}
	}

	shiftNodeDown(node) {
		if (node.left != null) {
			if (node.priority < node.left.priority) {
				if (node.left.left != null && node.parent == null) {
					node.left.swapWithParent();
					let parent = this.root.left.parent;
					parent.left = this.root;
					parent.right = this.root.right;
					parent.parent = null;
					let root = this.root;
					root.left = this.root.left; 
					root.right = null;
					root.parent = parent;
					this.root.left.parent = root;
					this.root = parent;
					this.root.right.parent = this.root;
					this.root.left = root;
					this.shiftNodeDown(root);
				} else if (node.left.left == null && node.parent != null && node.parent.parent == null) {
					let right = this.root.right;
					node.left.swapWithParent();
					let parent = node.left;
					parent.left = node;
					parent.right = node.right;
					parent.parent = this.root;
					let root = node;
					root.left = null; 
					root.right = null;
					root.parent = parent;
					this.root.left = parent;
					this.root.right = right;
					this.root.left.left = root;
					this.parentNodes[0] = this.root.left;
					this.parentNodes[1] = this.root.right;
					this.parentNodes[2] = this.root.left.left;
					this.shiftNodeDown(root);
				}
			}
		}
	}

	appendNode(node) {
		this.parentNodes[this.parentNodes.length-1].parent = null;
		for (var i = 0; i < this.parentNodes.length; i++) {
			if (this.parentNodes[i] == this.currentNode) {
				if (this.counter == 0 ) {
					this.parentNodes[i].left = null;
					this.counter += 2;
				} else if (this.counter == 1 || this.counter == 2) {
					if (this.counter == 1) {
						this.parentNodes[i].left = null;
						this.counter += 2;
					} else if (this.counter == 2) {
						this.parentNodes[i].left.left = null;
						this.parentNodes[i].right = null;
						this.counter++;
					}
				} else {
					this.findCurrentNode();
					this.appendNode(node);
					break;
				}
				if (this.parentNodes[i].left == null) {
					for (var j = 0; j < this.parentNodes.length; j++) {
						if (this.parentNodes[j].parent == null && j != 0) {
							this.parentNodes[i].left = this.parentNodes[j];
							this.parentNodes[j].parent = this.parentNodes[i];
							break;
						}
					}
					break;
				} else if (this.parentNodes[i].right == null ) {
					for (var k = 0; k < this.parentNodes.length; k++) {
						if (this.parentNodes[k].parent == null && k != 0) {
							this.parentNodes[i].right = this.parentNodes[k];
							this.parentNodes[k].parent = this.parentNodes[i];
							break;
						}
					}
					break;
				}
			}
		}
	}

	findCurrentNode() {
		if (this.size != 0) {
			for (var i = 0; i < this.parentNodes.length; i++) {
				if (this.parentNodes[i].left == null && this.parentNodes[i].right == null) {
					this.currentNode = this.parentNodes[i];
					this.counter = 0;
					break;
				} else if (this.parentNodes[i].left == null && this.parentNodes[i].right != null) {
					this.currentNode = this.parentNodes[i];
					this.counter = 1;
					break;
				} else if (this.parentNodes[i].left != null && this.parentNodes[i].right == null) {
					this.currentNode = this.parentNodes[i];
					this.counter = 2;
					break;
				}
			}
		} else {
			this.currentNode = null;
		}
	}
}

module.exports = MaxHeap;
