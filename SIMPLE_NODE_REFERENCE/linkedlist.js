class Node {
  constructor(previous, data) {
    this.data = data;
    this.previous = previous;
  }
}

class List {
  constructor(start) {
    this.start = new Node(-1, start);
    this.length = 1;
    this.arrayIt = [];
  }
  addNode(data) {
    const node = new Node(this.start, data);
    this.start = node;
    this.length = this.length + 1;
    return node;
  }
  iterateList(node = this.start) {
    if (node.previous === -1) {
      this.arrayIt.push(node.data);
      return this.arrayIt;
    } else {
      this.arrayIt.push(node.data);
      this.iterateList(node.previous);
    }
  }
}

const createList = () => {
  const list = new List('initial');
  list.addNode('Yash');
  list.addNode('Mayank');
  list.addNode('Amitabh');
  list.iterateList();
  console.log(list);
};

createList();
