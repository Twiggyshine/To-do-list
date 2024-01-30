import { createElement, createElementButton, createElementCheckbox, createElementWithText } from './utils.js';

export const createSection = (id, text, date, isChecked, createCheckboxListener, createCloseButtonListener) => {
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