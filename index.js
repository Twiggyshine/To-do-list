const root = document.getElementById('root')

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

const wrapper = document.createElement('div')
const form = document.createElement('div')
form.classList = 'form'
root.append(form)

const header = document.createElement('header')
form.prepend(header)

const addTasks = document.createElement('button')
addTasks.className = 'button'
addTasks.type  = 'button'
addTasks.textContent = 'Add Task'
header.prepend(addTasks)

const input = document.createElement('input')
input.placeholder = 'Enter todo'
input.classList.add('main-input')
header.prepend(input)

const deleteTasks = document.createElement('button')
deleteTasks.className = 'button'
deleteTasks.type  = 'button'
deleteTasks.textContent = 'Delete All'
header.prepend(deleteTasks)

const createSection = () => {
    const tasksSection = createElement('section', 'tasks-section');

    const headerSection = createElement('div', 'header-section')
    tasksSection.append(headerSection)

    const closeTask = createElementButton('button', '✕', 'close-button');
    headerSection.append(closeTask);

    const centerSection = createElement('div', 'center-section');
    tasksSection.append(centerSection);

    const addTask = createElementCheckbox('checkbox', true);
    centerSection.append(addTask);

    const toDoText = createElementWithText('div', 'to-do-text', 'To Do text');
    toDoText.id = "id";
    centerSection.append(toDoText);

    const date = createElementWithText('span', 'dateTime', '14.01.2024');
    tasksSection.append(date);

    return tasksSection;
}

form.append(createSection());
form.append(createSection());
form.append(createSection());