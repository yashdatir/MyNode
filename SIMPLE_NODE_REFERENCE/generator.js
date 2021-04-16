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
