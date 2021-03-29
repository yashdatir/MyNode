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
