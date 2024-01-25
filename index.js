const root = document.getElementById('root')

const wrapper = document.createElement('div')
const block = document.createElement('div')
block.classList = 'block'
root.append(block)

const form = document.createElement('form')
form.className = 'form'
block.prepend(form)

const addTasks = document.createElement('button')
addTasks.className = 'button'
addTasks.type  = 'submit'
addTasks.textContent = 'Add Task'
form.prepend(addTasks)

const input = document.createElement('input')
input.placeholder = 'Enter todo'
input.type = 'text'
input.classList.add('main-input')
form.prepend(input)

const deleteTasks = document.createElement('button')
deleteTasks.className = 'button'
deleteTasks.type  = 'reset'
deleteTasks.textContent = 'Delete All'
form.prepend(deleteTasks)

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

const createSection = (text, date) => {
    const tasksSection = createElement('section', 'tasks-section');
    tasksSection.id = self.crypto.randomUUID()

    const headerSection = createElement('div', 'header-section');
    tasksSection.append(headerSection)

    const closeTask = createElementButton('button', '✕', 'close-button');
    createCloseButtonListener(closeTask);
    headerSection.append(closeTask);

    const centerSection = createElement('div', 'center-section');
    tasksSection.append(centerSection);

    const acceptTask = createElementCheckbox('checkbox', false);
    centerSection.append(acceptTask);

    const toDoText = createElementWithText('div', 'toDoText', text);
    centerSection.append(toDoText);

    const dateTask = createElementWithText('span', 'dateTime', date);
    tasksSection.append(dateTask);

    return tasksSection;
}




let tasks = []

// кнопка deleteAll

deleteTasks.addEventListener('click', (event) => {
    confirm('Are you sure you want to delete all the tasks?')
    for (i = 0; i < tasks.length; i++) {
        document.querySelector('.tasks-section').remove()
    }
})

// добавление элементов

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements[1].value;
  if (inputValue === '') {
    return;
  }
  let date = new Date().toLocaleTimeString()

  const taskItem = createSection(inputValue, date)
  tasks.push(taskItem)
  block.append(taskItem)

  event.target.reset();
})

// кнопка удалить конкретное задание

function createCloseButtonListener(closeTask) {
    closeTask.addEventListener('click', (event) => {
    confirm('Do you want to delete this task?')
    const identifier = event.currentTarget.closest('.tasks-section')
    tasks = tasks.filter((taskSection) => taskSection.id !== identifier)
    event.currentTarget.closest('.tasks-section').remove()
    })
}







