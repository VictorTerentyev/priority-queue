const Queue = require('./src/queue');
const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const h = new MaxHeap();
const node = new Node (12,50);
const q = new Queue();
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

				h.push(0,0);
				h.push(1,1);
				h.push(2,2);
				h.push(3,3);
				h.push(4,4);
				h.push(5,5);
				h.push(6,6);