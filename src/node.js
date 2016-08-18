class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left != null && this.right != null) {

		} else
		if (this.left == null) {
			this.left = node;
		} else
		if (this.left != null) {
			this.right = node;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
		} else if (this.right == node) {
			this.right = null;
		} else if (this.left != node && this.right != node) {
			alert('Passed argument is not a child of this node');
		}
		this.parent = null;
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {

	}
}

module.exports = Node;
