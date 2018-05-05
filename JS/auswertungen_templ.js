$(document).ready(function() {

  var statistiken = [
    {
      id: 1,
      name: "Gesparte Zeit im Überblick",
      img: "../images/grafik1.png",
    },
    {
      id: 2,
      name: "Projektüberblick",
      img: "../images/grafik2.png",
    },

  ]

  var mytemplate = $("#mytemplate").html();
  var compiled_mytemplate = _.template(mytemplate);
  for (var item of statistiken) {
      $("#content").append(compiled_mytemplate(
          {
              statistiken_id: item.id,
              statistiken_name: item.name,
              statistiken_img: item.img,
            }
        ));
    }

});
