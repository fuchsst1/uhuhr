$(document).ready(function(){


// dummy data for the template

var todos = [
    {
        id: 1,
        aufgabe: "Aufgabe 1",
    },
    {
        id: 2,
        aufgabe: "Aufgabe 2",
    },
    {
        id: 3,
        aufgabe: "Aufgabe 3",
    },
    {
        id: 4,
        aufgabe: "Aufgabe 4",
    },
]


// Read template
var todo_list_template = $("#todo_list_template").html();

// Compile Template
var compiled_todo_list_template = _.template(todo_list_template);

// Add each todo
for (var item of todos) {
    $("#todoUL").append(compiled_todo_list_template(
        {
            todos_id: item.id,
            todos_aufgabe: item.aufgabe,
        }
    ));
}
}
