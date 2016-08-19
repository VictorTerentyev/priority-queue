class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			this.left.parent = this;
		} else if (this.right == null) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right == node) {
			this.right.parent = null;
			this.right = null;
		} else if (this.left != node && this.right != node) {
			alert('Passed argument is not a child of this node');
		}
	}

	remove() {
		if (this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent == null) { //does nothing if node does not have parent
			return;
		} else if (this.left != null && this.parent.parent == null && this.parent.right != null) { //updates children of node and parent node
			this.parent.left = this.left;
			this.left = this.parent;
			this.right = this.parent.right;
		} else if (this.parent.parent == null && this.parent.left != null && this.parent.right != null) { //updates parent.child.parent
			this.parent.left.parent=this;
		} else if (this.parent != null && this.parent.parent == null) { //updates parent.parent
			this.parent.parent = this;
			if (this.parent.left != null) {
				this.parent.parent.left = this.parent;
			} else if (this.parent.right != null) {
				this.parent.parent.right = this.parent;
			}
		} else if (this.parent.parent != null && this.parent.parent.left != null && this.parent.parent.right != null) { //maintains correct state of parent.parent.left and parent.parent.right
			if (this.parent.parent.left.left == this) {
				this.parent = this.parent
				this.parent.parent.right = this.parent.parent.right.left;
			} else {
				this.parent.parent.left = this.parent.parent.left.left;
				this.parent = this;
			}
		} else if (this.parent.parent != null) { //updates child.parent
			this.parent = this.parent.parent;
		}
	}
}

module.exports = Node;
