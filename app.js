const todosContainer = document.getElementById("todos-container");
const input = document.querySelector("input");
const addButton = document.getElementById("add-button");

const todoArr = [];

addButton.addEventListener("click", () => {
  if (input.value.length > 0) {
    todoArr.push(input.value);
  }
  //clean slate
  input.value = "";
  todosContainer.innerHTML = "";

  todoArr.forEach((item) => {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
      <div class="complete-div">
        <button class="complete-button">✅</button>
      </div>
      <p class="todo-txt "> ${item} </p>
      <div class="delete-div">
        <button class="delete-button hidden">❌</button>
      </div>
    `;
    todosContainer.append(todo);
  });
  const todos = document.querySelectorAll(".todo");
  const todoTxt = document.querySelectorAll(".todo-txt");

  const completeButtons = document.querySelectorAll(".complete-button");
  const deleteButtons = document.querySelectorAll(".delete-button");

  completeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      deleteButtons[index].classList.remove("hidden");
      todoTxt[index].classList.add("strike-through");
    });
  });

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      todoArr.splice(index, 1);
      todos[index].remove();
    });
  });
});
