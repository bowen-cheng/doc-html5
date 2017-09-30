// querySelectorAll returns a NodeList
var items = document.querySelectorAll("#example-container li");

// 1. Iterate over a NodeList with for loop
for (var i = 0; i < items.length; i++) {
  console.log(items[i].innerText);
}

// 2. Iterate over a NodeList with forEach
var forEach = Array.prototype.forEach;

forEach.call(items, function (item) {
  console.log(item.innerText);
});
