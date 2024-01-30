import { createSection } from './api.js';

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

let tasks = [];

renderTasks();

deleteTasks.addEventListener("click", (event) => {
    confirm("Are you sure you want to delete all the tasks?");
    tasks.length = 0;
    setData();
    renderTasks();
});

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

function createCloseButtonListener(closeTask) {
    closeTask.addEventListener("click", (event) => {
        confirm("Do you want to delete this task?");
        const identifier = event.currentTarget.closest(".tasks-section").id;
        tasks = tasks.filter((taskSection) => taskSection.id !== identifier);
        setData();
        renderTasks();
    });
}

function setData() {
    localStorage.setItem("todos", JSON.stringify(tasks));
}

function getData(key = "todos") {
    return JSON.parse(localStorage.getItem(key) ?? '[]');
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
            task.isChecked,
            createCheckboxListener,
            createCloseButtonListener
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