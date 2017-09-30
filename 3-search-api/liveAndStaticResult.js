//Gets the feature list
var featureList = document.querySelector("#example-container ul");

// The next two lines of statements returns the same elements list
var getByClassNameResult = document.getElementsByClassName("feature");
var querySelectorAllResult = document.querySelectorAll("#example-container li");

// Increase list length from 6 to 7
var newItem = document.createElement("li");
newItem.className = "feature";
newItem.innerText = "new live feature";
featureList.appendChild(newItem);

console.log(getByClassNameResult.length); // prints 7 instead of 6
console.log(querySelectorAllResult.length); // prints 6
