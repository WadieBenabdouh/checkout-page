// FIRST ITEM
let count = 0;

document.getElementById("decreaseBtn1").onclick = function () {
  // count -= 1;
  if (count >= 1) count--;
  // count = (count < 10) ? + count : count;
  document.getElementById("countoneLabel").innerHTML = count;
};

document.getElementById("increaseBtn1").onclick = function () {
  count += 1;
  document.getElementById("countoneLabel").innerHTML = count;
};

//// SECOND ITEM ////

let countTwo = 0;

document.getElementById("decreaseBtn2").onclick = function () {
  // countTwo -= 1;
  if (countTwo >= 1) countTwo--;
  // count = (count < 10) ? + count : count;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};

document.getElementById("increaseBtn2").onclick = function () {
  countTwo += 1;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};
