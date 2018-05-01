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
