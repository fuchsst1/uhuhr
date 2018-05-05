$(document).ready(function(){

/* $(document).ready(function(){
    $("#subproject2").append("<tr>" +
      "<td>" + 'Neue Homepage' + "</td>" +
      "<td>" + 'ABB' + "</td>" +
      "<td>" + '21.01.2018' + "</td>" +
      "<td>" + '30.06.2018' + "</td>" +
      "<td>" +
      '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
      '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
      '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
      "</tr>");

      $("#subproject2").append("<tr>" +
        "<td>" + 'Backend überarbeiten' + "</td>" +
        "<td>" + 'Credit Suisse' + "</td>" +
        "<td>" + '11.04.2018' + "</td>" +
        "<td>" + '20.07.2018' + "</td>" +
        "<td>" +
        '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
        '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
        '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
        "</tr>");
  }); */






  $("#subproject").on("click", function(){
    var selectedVal1 = $("#user").val();
    var selectedVal2 = $("#sel1").val();
    var selectedVal3 = $("#startdatum").val();
    var selectedVal4 = $("#enddatum").val();
    $("#subproject2").append("<tr>" +
      "<td>" + selectedVal1 + "</td>" +
      "<td>" + selectedVal2 + "</td>" +
      "<td>" + selectedVal3 + "</td>" +
      "<td>" + selectedVal4 + "</td>" +
      "<td>" +
      '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> Anzeigen </a>' + " " +
      '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Bearbeiten </a>' +  " " +
      '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Löschen </a>' + "</td>" +
      "</tr>");
  });




  // dummy data
  var projekte = [
      {
          id: 1,
          name: "Neue Homepage",
          mitarbeiter: "../images/avatar1.png",
          kunde: "ABB",
          startdatum: "21.01.2018",
          enddatum: "30.06.2018",
      },
      {
          id: 2,
          name: "Neue Homepage",
          mitarbeiter: "../images/avatar2.png",
          kunde: "ABB",
          startdatum: "21.01.2018",
          enddatum: "30.06.2018",
      },
  ]


  // Read template
  var projekt_list_item_template = $("#projekt_list_item_template").html();

  // Compile Template
  var compiled_projekt_list_item_template = _.template(projekt_list_item_template);

  // Add each truck
  for (var item of projekte) {
      $("#subproject2").append(compiled_projekt_list_item_template(
          {
              projekt_id: item.id,
              projekt_name: item.name,
              projekt_mitarbeiter: item.mitarbeiter,
              projekt_kunde: item.kunde,
              projekt_startdatum: item.startdatum,
              projekt_enddatum: item.enddatum
          }
      ));
  }


$("a[href='#page-top']").click(function() {
$("html, body").animate({ scrollTop: 0 }, "slow");
return false;
});

});
