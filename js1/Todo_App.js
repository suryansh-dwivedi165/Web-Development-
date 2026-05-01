let todo = [];

let req = prompt("Please enter your request: ");

while (true) {
  if (req === "quit") break;
  else if (req === "list") {
    console.log("-----------------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
  } else if (req === "add") {
    let data = prompt("Please enter the task you want to add: ");
    todo.push(data);
  } else if (req === "delete") {
    delete_data = Number(
      prompt("Enter the idx that you want to delete the item: "),
    );
    delete todo[delete_data];
    console.log("Task Deleted");
  } else console.log("Invalid input");
}
