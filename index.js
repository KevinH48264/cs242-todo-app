// do these tasks upon page startup

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI"); // get all elements in index.html that are part of the hard coded list
var i; // initialize a variable i

// Add each item in my list to myNodeList as objects, specifically span objects with close classname so close properties are applied
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN"); // create span object inside the document which is rendered by index.html
  var txt = document.createTextNode("\u00D7"); // create a text object with the x emoji which is signified by \u00D7
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span); // add span object with close classname and text object to myNodeList
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() { // when close object is clicked, set display = none, which activates the css file for display = none for that div
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul'); // select all items with tag ul
list.addEventListener('click', function(ev) { // when clicked, change that item's class to checked if it was originally unchecked and vice versa
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li"); // create a new list item
  var inputValue = document.getElementById("myInput").value; // get the value from the input box object
  var t = document.createTextNode(inputValue);
  li.appendChild(t); // add new textnode to list item object

  if (inputValue === '') { // if it's empty, send an alert
    alert("You must write something!");
  } else { // otherwise add new list item to the unordered list
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = ""; // set input box to empty so user can enter a new value

  var span = document.createElement("SPAN"); // create the span object and x emoji and close classname and add these as children to the new list object
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) { // for each element with class close, change their display to none when clicked
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}