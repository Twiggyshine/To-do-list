const root = document.getElementById('root')


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

const tasksSection = document.createElement('section')
tasksSection.className = 'tasks-section'
form.append(tasksSection)

const headerSection = document.createElement('div')
headerSection.className = 'header-section'
tasksSection.append(headerSection)

const closeTask = document.createElement('button')
closeTask.className = 'button'
closeTask.classList.add('close-button')
closeTask.type  = 'button'
closeTask.textContent = '✕'
headerSection.append(closeTask)

const centerSection = document.createElement('div')
centerSection.className = 'center-section'
tasksSection.append(centerSection)

const addTask = document.createElement('input')
addTask.type = 'checkbox'
addTask.className = 'checkbox'
centerSection.append(addTask)


const toDoText = document.createElement('div')
toDoText.className = 'to-do-text'
toDoText.textContent = 'To Do text'
centerSection.append(toDoText)


const date = document.createElement('time')
date.textContent = '14.01.2024'
date.className = 'dateTime'
tasksSection.append(date)






