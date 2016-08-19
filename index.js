const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const h = new MaxHeap();
window.h = h;
const node = new Node(40,100);
window.h.parentNodes[0] = node;