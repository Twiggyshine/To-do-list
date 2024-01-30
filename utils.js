
export const createElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
};

export const createElementButton = (type, textContent, ...classes) => {
    const button = createElement("button", "button");
    button.classList.add(...classes);
    button.type = type;
    button.textContent = textContent;
    return button;
};

export const createElementCheckbox = (type, checked) => {
    const element = createElement("input", "checkbox");
    element.type = type;
    element.checked = checked;
    return element;
};

export const createElementWithText = (tagName, className, textContent) => {
    const element = createElement(tagName, className);
    element.textContent = textContent;
    return element;
};
