$(document).ready(function(){
  $("#subproject").on("click", function(){
    var projektname = $("#user").val();
    var kunde = $("#sel1").val();
    var startdatum = $("#startdatum").val();
    var enddatum = $("#enddatum").val();
    $("#subproject2").append("<tr>" +
      "<td>" + projektname + "</td>" +
      "<td>" +
      '<a class="p-team" href="../images/avatar3.png"> <img alt="image" src="../images/avatar3.png" width="20px" height="20px"> </a>' +
      "</td>" +
      "<td>" + kunde + "</td>" +
      "<td>" + startdatum + "</td>" +
      "<td>" + enddatum + "</td>" +
      "<td>" +
      '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
      '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
      '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
      "</tr>");
  });
  $("a[href='#page-top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });

  $("#startbtn").on("click",function(){
    var dt = new Date();
    var startzeit = dt.getHours() + ":" + dt.getMinutes()+ ":" + dt.getSeconds();
    $("#startzeit").val(startzeit);
    });

    $("#stopp").on("click",function(){
      var dt = new Date();
      var endzeit = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
      $("#endzeit").val(endzeit);
      });

      $("#register").on("click", function() {
    $("#hide").show();
  })

  $("#hide").hide();
})
