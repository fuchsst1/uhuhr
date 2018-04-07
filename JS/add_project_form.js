

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

function startTime(){
  var sd = Date.parse(new Date)
  sd /= 6000;
document.getElementById("startdate").innerHTML = sd;
}

function endTime(){
  var ed = Date.parse(new Date)
  ed /= 6000;
  document.getElementById("enddate").innerHTML = ed;
}
