$(document).ready(function () {

    // dummy data
    var todos = [
        {
            id: 1,
            name: "LNW3 abgeben",
        },
        {
            id: 2,
            name: "Back-End fertigstellen",
        },
        {
            id: 3,
            name: "Front-End optimieren",
        },
        {
            id: 4,
            name: "ITPM LNW3 fertigstellen",
        },
        {
            id: 5,
            name: "Tests durchführen",
        },
    ]


    // Read template
    var todo_list_item_template = $("#todo_list_item_template").html();

    // Compile Template
    var compiled_todo_list_item_template = _.template(todo_list_item_template);

    // Add each truck
    for (var item of todos) {
        $("#todoUL").append(compiled_todo_list_item_template(
            {
                todos_id: item.id,
                todos_name: item.name
            }
        ));
    }
});
