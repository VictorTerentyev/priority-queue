const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const h = new MaxHeap();
const node = new Node (12,50);
window.h = h;
const nodes = [
				new Node(0, 0),
				new Node(1, 1),
				new Node(2, 2),
				new Node(3, 3),
				new Node(4, 4),
				new Node(5, 5),
				new Node(6, 6),
			];

			h.insertNode(nodes[0]);
			h.insertNode(nodes[1]);
			h.insertNode(nodes[2]);
			h.insertNode(nodes[3]);
			h.insertNode(nodes[4]);
			h.insertNode(nodes[5]);
			h.insertNode(nodes[6]);