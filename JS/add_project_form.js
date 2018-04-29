$(document).ready(function() {

$("#register").on("click", function() {
  $("#hide").show();
})

$("#hide").hide();

$("input#taskinput").keyup(function() {
    var value = $( this ).val();
    $( "p#taskoutput" ).text( value );
  })
  .keyup();

$("input#taskinput").keyup(function() {
    var value = $( this ).val();
    $("#taskname").val(value);
  })
  .keyup();

$("#save").on("click", function() {

    $("input#taskinput").val(function() {
            var value = $( this ).val();
            $("input#sdate").val(function() {
                    var sdate = $( this ).val();
                    $("input#sdate").val(function() {
                            var sdate = $( this ).val();

        $( "table" ).append('<tr><td class="p-name"><a href="#">'+value+ '</a><p id="taskoutput"></p><br><small>Created '+sdate+'</small></td></tr>');
  })
  })
})
    $("#id02").hide();
  })

  $("#test").click(function(){
          $("p").append(" <b>Appended text</b>.");
          $('table').append('<tr><td class="p-name"><a href="#">Schrift rot machen</a><p id="taskoutput"></p><br><small>Created 11.12.2017</small></td></tr>');

      });
})




$(document).ready(function(){
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
      '<a href="project_details.html" class="btn btn-primary btn-xs"><i class="fa fa-folder"></i> View </a>' +
      '<a href="#" class="btn btn-info btn-xs"><i class="fas fa-pencil-alt"></i> Edit </a>' +
      '<a href="#" class="btn btn-danger btn-xs"><i class="far fa-trash-alt"></i> Delete </a>' + "</td>" +
      "</tr>");
  });
})
