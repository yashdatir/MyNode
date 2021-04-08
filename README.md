# Start

Welcome, This repo is a reference to a few complex problems and partial solution to a few. Each file in this repo has something new, something totaly different yet important. Updates will be made from time to time.

### charcount.js

> Implementation for calculating characters from a string and pushing the count to an object.

```sh
function getTextStats(text) {
  let counter = {};

  for (let i = 0; i < text.length; i++) {
    if (!counter[text[i]]) {
      counter[text[i]] = 1;
    } else {
      counter[text[i]] = counter[text[i]] + 1;
    }
  }
  return counter;
}
console.log(getTextStats('Mayank Manu, Amitabh Kumar, Yash Datir'));
//example:- console.log(getTextStats('Hello World'));

```

### linkedlist.js

> A try to implement linked list using class object in javascript. Looking for updates for more features and methods for the same.

```sh
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
```

### SortUnique.js

> Sorts unique id items to an array. Working on the efficiency and reducing complexity of the same.

```sh
const a = [
  { id: 'qwer' },
  { id: 'abcd' },
  { id: 'abcd' },
  { id: 'qwer' },
  { id: 'qwer' },
  { id: 'asdf' },
];
const id = a.map((it) => it.id);
const ids = new Set(id);
const setIds = [...ids];
let unique = [];
setIds.forEach((iterator) => {
  let u = [];
  a.forEach((element) => {
    element.id === iterator ? u.push(element) : null;
  });
  unique.push(u);
});
console.log(unique);
```

### reduxNode.js

> Simple implementation of Redux in node. Just created a simple application to fire action to change the value of store through reducers and update using the subscribe.

```sh
const createStore = require('redux').createStore;

//REDUCERS
const INITIAL_STATE = {
  name: 'Yash',
};
const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE': {
      return {
        name: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

//ACTIONS
const changeData = (data) => {
  return {
    type: 'CHANGE',
    data,
  };
};

const store = createStore(testReducer);

console.log('INITIAL_STATE:', store.getState());

store.subscribe(() => {
  const data = store.getState();
  console.log('STATE_UPDATED:', data);
});

store.dispatch(changeData('Abcd'));
store.dispatch(changeData('Mayank'));

```

### generator.js

> Simple demo for how the generator and yield works. Basic Program 1 just console logs the names...

```
// Basic Program 1

function* testGenerator() {
  yield console.log('Mayank');
  yield console.log('Amitabh');
  yield console.log('Yash');
}

const a = testGenerator();
a.next();
a.next();
a.next();
```

> Basic Program 2 uses and shows the return value of the next function

```
// Basic Program 2

function* example(arr) {
  for (val of arr) {
    console.log('BEFORE');
    yield val;
    console.log('AFTER');
  }
}

const myFunction = example([1, 2, 3, 4]);

while (!myFunction.next().done) {
  console.log(myFunction.next().value);
}

console.log(myFunction.next());
```
