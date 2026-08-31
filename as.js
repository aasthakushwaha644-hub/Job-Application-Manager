function addTodo() {
    let input = document.getElementById("todoInput");
    let todo = input.value;

    let li = document.createElement("li");

    let text = document.createElement("span");
    text.innerText = todo;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(text);
    li.appendChild(deleteButton);

    document.getElementById("todoList").appendChild(li);

    input.value = "";
}
