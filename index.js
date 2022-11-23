let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function add(numb) {
  count += numb;
}

function updateCountElem(text) {
  let countEl = document.getElementById("count-el");
  countEl.innerText = text;
}

function resetCounter() {
  count = 0;
  countEl.innerText = 0;
}

function displayCount() {
  updateCountElem(count);
}

function increment() {
  add(1);
  displayCount();
}

function decriment() {
  add(-1);
  displayCount();
}

function getCountTitle(numb) {
  return `< ${numb} >`;
}

function createResultElem() {
  return document.createElement("span");
}

function save() {
  const span = createResultElem();
  span.innerHTML = getCountTitle(count);

  saveEl.appendChild(span);

  resetCounter();
}
