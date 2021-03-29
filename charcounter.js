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
