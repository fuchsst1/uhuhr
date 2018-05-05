$(document).ready(function () {

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

});
