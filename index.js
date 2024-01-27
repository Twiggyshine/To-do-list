const root = document.getElementById("root");

const wrapper = document.createElement("div");

const block = document.createElement("div");
block.classList = "block";
root.append(block);

const form = document.createElement("form");
form.className = "form";
block.prepend(form);

const addTasks = document.createElement("button");
addTasks.className = "button";
addTasks.type = "submit";
addTasks.textContent = "Add Task";
form.prepend(addTasks);

const input = document.createElement("input");
input.placeholder = "Enter todo";
input.type = "text";
input.classList.add("main-input");
form.prepend(input);

const deleteTasks = document.createElement("button");
deleteTasks.className = "button";
deleteTasks.type = "reset";
deleteTasks.textContent = "Delete All";
form.prepend(deleteTasks);

const createElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
};

const createElementButton = (type, textContent, ...classes) => {
  const button = createElementWithText("button", "button", textContent);
  button.classList.add(classes);
  button.type = type;
  return button;
};

const createElementCheckbox = (type, checked) => {
  const element = createElement("input", "checkbox");
  element.type = type;
  element.checked = checked;
  return element;
};

const createElementWithText = (tagName, className, textContent) => {
  const element = createElement(tagName, className);
  element.textContent = textContent;
  return element;
};

const createSection = (id, text, date, isChecked) => {
  const tasksSection = createElement("section", "tasks-section");
  tasksSection.id = id;

  const headerSection = createElement("div", "header-section");
  tasksSection.append(headerSection);

  const closeTask = createElementButton("button", "✕", "close-button");
  createCloseButtonListener(closeTask);
  headerSection.append(closeTask);

  const centerSection = createElement("div", "center-section");
  tasksSection.append(centerSection);

  const acceptTask = createElementCheckbox("checkbox", isChecked);
  createCheckboxListener(acceptTask);
  centerSection.append(acceptTask);

  const toDoText = createElementWithText("div", "toDoText", text);
  centerSection.append(toDoText);

  const dateTask = createElementWithText("span", "dateTime", date);
  tasksSection.append(dateTask);

  return tasksSection;
};

let tasks = [];

renderTasks();

// кнопка deleteAll

deleteTasks.addEventListener("click", (event) => {
  confirm("Are you sure you want to delete all the tasks?");
  tasks.length = 0;
  setData();
  renderTasks();
});

// добавление

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements[1].value;
  if (inputValue === "") {
    return;
  }
  let date = new Date().toLocaleTimeString();

  const todo = {
    id: self.crypto.randomUUID(),
    date: date,
    text: inputValue,
    isChecked: false,
  };
  tasks.push(todo);
  setData();
  renderTasks();

  event.target.reset();
});

// кнопка удалить конкретное задание

function createCloseButtonListener(closeTask) {
  closeTask.addEventListener("click", (event) => {
    confirm("Do you want to delete this task?");
    const identifier = event.currentTarget.closest(".tasks-section").id;
    tasks = tasks.filter((taskSection) => taskSection.id !== identifier);
    setData();
    renderTasks();
  });
}

//localStorage

function setData() {
  localStorage.setItem("todos", JSON.stringify(tasks));
}

function getData() {
  const data = localStorage.getItem("todos");
  if (data === null) {
    return [];
  }
  return JSON.parse(data);
}

function renderTasks() {
  while (document.querySelector(".tasks-section")) {
    document.querySelector(".tasks-section").remove();
  }
  tasks = getData();
  tasks.forEach((task) => {
    const section = createSection(
      task.id,
      task.text,
      task.date,
      task.isChecked
    );
    block.append(section);
  });
}

function createCheckboxListener(acceptTask) {
  acceptTask.addEventListener("change", (event) => {
    const identifier = event.currentTarget.closest(".tasks-section").id;
    const task = tasks.find((task) => task.id === identifier);
    task.isChecked = !task.isChecked;
    setData();
  });
}








