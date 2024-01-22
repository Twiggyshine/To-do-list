const root = document.getElementById('root')

const wrapper = document.createElement('div')
const form = document.createElement('div')
form.classList = 'form'
root.append(form)

const header = document.createElement('header')
header.className = 'header'
form.prepend(header)

const addTasks = document.createElement('button')
addTasks.className = 'button'
addTasks.type  = 'submit'
addTasks.textContent = 'Add Task'
header.prepend(addTasks)

const input = document.createElement('input')
input.placeholder = 'Enter todo'
input.type = 'text'
input.classList.add('main-input')
header.prepend(input)

const deleteTasks = document.createElement('button')
deleteTasks.className = 'button'
deleteTasks.type  = 'reset'
deleteTasks.textContent = 'Delete All'
header.prepend(deleteTasks)

const createElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}

const createElementButton = (type, textContent, ...classes) => {
    const button = createElementWithText('button', 'button', textContent);
    button.classList.add(classes);
    button.type = type;
    return button;
}

const createElementCheckbox = (type, checked) => {
    const element = createElement('input', 'checkbox');
    element.type = type;
    element.checked = checked;
    return element;
}

const createElementWithText = (tagName, className, textContent) => {
    const element = createElement(tagName, className);
    element.textContent = textContent;
    return element;
}

const createSection = () => {
    const tasksSection = createElement('section', 'tasks-section');

    const headerSection = createElement('div', 'header-section');
    tasksSection.append(headerSection)

    const closeTask = createElementButton('button', '✕', 'close-button');
    headerSection.append(closeTask);

    const centerSection = createElement('div', 'center-section');
    tasksSection.append(centerSection);

    const addTask = createElementCheckbox('checkbox', false);
    centerSection.append(addTask);

    const toDoText = createElementWithText('div', 'toDoText', 'Learn JS');
    toDoText.id = "id";
    centerSection.append(toDoText);

    const date = createElementWithText('span', 'dateTime', '2022.02.22 22:22:22');
    tasksSection.append(date);

    return tasksSection;
}

let date = new Date().toLocaleTimeString()











// кнопка addTask

addTasks.addEventListener('click', (event) => {
    const addItem = createSection()
    form.append(addItem)
})

// кнопка DeleteAll

deleteTasks.addEventListener('click', (event) => {
    confirm('Уверены,что хотите удалить все задания?')
    for (step = 0;; step++) {
        document.querySelector('.tasks-section').remove()
    }
})




const tasks = []

header.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = "learn JS";

    const task = {
    id:self.crypto.randomUUID(),
    task: inputValue,
    isCompleted: true,
    date: new Date().toLocaleTimeString()
}
    tasks.push(task)
    tasks.forEach(task => {
    const taskItem = createSection()
    form.append(taskItem)
})
event.target.reset();
})                        //вообще не поняла, как это должно работать и работает ли на header
