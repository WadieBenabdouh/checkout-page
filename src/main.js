// FIRST ITEM
let count = 1;

document.getElementById("decreaseBtn1").onclick = function () {
  count -= 1;
  document.getElementById("countoneLabel").innerHTML = count;
};

document.getElementById("increaseBtn1").onclick = function () {
  count += 1;
  document.getElementById("countoneLabel").innerHTML = count;
};
// SECOND ITEM
let countTwo = 1;

document.getElementById("decreaseBtn2").onclick = function () {
  countTwo -= 1;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};

document.getElementById("increaseBtn2").onclick = function () {
  countTwo += 1;
  document.getElementById("counttwoLabel").innerHTML = countTwo;
};
