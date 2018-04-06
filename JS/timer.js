<script>
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
</script>
