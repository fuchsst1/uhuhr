// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var ul = document.getElementById("mytodo");
  var li = document.createElement("li");
  var inputValue = document.getElementById("newtodo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Bitte schreib eine neue Aufgabe in das Feld.");
  } else {
    document.getElementById("mytodo").appendChild(li);
  }
  document.getElementById("newtodo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//$(document).ready(function() {

//$("#create").on("click", function() {

//  newTodo = $("#newTodo").val();

//  if(!newTodo) { return }

//  $("<div><input type='checkbox'><label> +newTodo+ </label>
//  </div>").appendTo("#todolist");

//  $("newTodo").val("");

// })
// })

//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.
