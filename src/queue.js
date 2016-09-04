const MaxHeap = require('./max-heap.js');
const Node = require('./node.js');
class PriorityQueue {

	constructor (maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size < this.maxSize) {
			let node = new Node(data,priority);
			this.heap.queue = 1;
			this.heap.push(data,priority);
			this.heap.queue = 0;
		} else {
			alert("maxSize reached");
		}
	}

	shift() {	
		if (this.heap.size != 0) {
			this.sort();
			this.heap.queue = 1;
			let temp = this.heap.pop();
			this.heap.queue = 0;
			return temp;
		} else {
			alert("queue is empty");
		}
	}

	sort() {
		for (var i = 0; i < this.heap.parentNodes.length; i++) {
			for (var j = 0; j < this.heap.parentNodes.length; j++) {
				if (j < this.heap.parentNodes.length-1 && j == 0 && this.heap.parentNodes[j].priority < this.heap.parentNodes[j+1].priority) {
					let tempParentLeft = this.heap.parentNodes[j+1].left;
					let tempParentRight = this.heap.parentNodes[j+1].right;
					let tempLeftLeft = this.heap.parentNodes[j];
					let tempLeftRight = this.heap.parentNodes[j].right;
					let tempLeft = this.heap.parentNodes[j+1];
					tempLeft.parent = this.heap.parentNodes[j].parent;
					tempLeft.left = tempLeftLeft;
					if (tempLeft.left != null) {
						tempLeft.left.parent = tempLeft;
					}
					tempLeft.right = tempLeftRight;
					if (tempLeft.right != null) {
						tempLeft.right.parent = tempLeft;
					}
					let tempParent = this.heap.parentNodes[j];
					tempParent.parent = this.heap.parentNodes[j+1];
					tempParent.left = tempParentLeft;
					if (tempParent.left != null) {
						tempParent.left.parent = tempParent;
					}
					tempParent.right = tempParentRight;
					if (tempParent.right != null) {
						tempParent.right.parent = tempParent;
					}
					this.heap.parentNodes[j] = tempLeft;
					this.heap.parentNodes[j+1] = tempParent;
				} else if (j < this.heap.parentNodes.length-1 && j != 0 && this.heap.parentNodes[j].priority < this.heap.parentNodes[j+1].priority) {
					if (this.heap.parentNodes[j].parent.left == this.heap.parentNodes[j] && this.heap.parentNodes[j].parent.right == this.heap.parentNodes[j+1]) {
						let tempLeft = this.heap.parentNodes[j];
						let tempRight = this.heap.parentNodes[j+1];
						let tempLeftLeft = this.heap.parentNodes[j+1].left;
						let tempLeftRight = this.heap.parentNodes[j+1].right;
						let tempRightLeft = this.heap.parentNodes[j].left;
						let tempRightRight = this.heap.parentNodes[j].right;
						tempLeft.parent = this.heap.parentNodes[j+1].parent;
						tempLeft.left = tempLeftLeft;
						if (tempLeft.left != null) {
							tempLeft.left.parent = tempLeft;
						}
						tempLeft.right = tempLeftRight;
						if (tempLeft.right != null) {
							tempLeft.right.parent = tempLeft;
						}
						tempRight.parent = this.heap.parentNodes[j].parent;
						tempRight.left = tempRightLeft;
						if (tempRight.left != null) {
							tempRight.left.parent = tempRight;
						}
						tempRight.right = tempRightRight;
						if (tempRight.right != null) {
							tempRight.right.parent = tempRight;
						}
						this.heap.parentNodes[j+1] = tempLeft;
						this.heap.parentNodes[j] = tempRight;
						this.heap.parentNodes[j].parent.left = this.heap.parentNodes[j];
						this.heap.parentNodes[j].parent.right = this.heap.parentNodes[j+1];
						this.heap.parentNodes[j].parent.right.parent = this.heap.parentNodes[j].parent;
					} else if (this.heap.parentNodes[j].parent.right == this.heap.parentNodes[j]) {
						let tempRight = this.heap.parentNodes[j];
						let tempLeft = this.heap.parentNodes[j+1];
						let tempRightLeft = this.heap.parentNodes[j+1].left;
						let tempRightRight = this.heap.parentNodes[j+1].right;
						let tempLeftLeft = this.heap.parentNodes[j].left;
						let tempLeftRight = this.heap.parentNodes[j].right;
						let tempRightParent = this.heap.parentNodes[j].parent;
						tempRight.parent = this.heap.parentNodes[j+1].parent;
						tempRight.left = tempRightLeft;
						if (tempRight.left != null) {
							tempRight.left.parent = tempRight;
						}
						tempRight.right = tempLeftRight;
						if (tempRight.right != null) {
							tempRight.right.parent = tempRight;
						}
						tempLeft.parent = tempRightParent;
						tempLeft.left = tempLeftLeft;
						if (tempLeft.left != null) {
							tempLeft.left.parent = tempLeft;
						}
						tempLeft.right = tempLeftRight;
						if (tempLeft.right != null) {
							tempLeft.right.parent = tempLeft;
						}
						this.heap.parentNodes[j+1] = tempRight;
						this.heap.parentNodes[j] = tempLeft;
						this.heap.parentNodes[j].parent.right = this.heap.parentNodes[j];
						this.heap.parentNodes[j+1].parent.left = this.heap.parentNodes[j+1];
					}
				}
			}
		}
		this.heap.root = this.heap.parentNodes[0];
	}

	size() {
		return this.heap.size;
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
