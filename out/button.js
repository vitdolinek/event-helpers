const createElement = (tag, options) => {
    const element = document.createElement(tag);
    element.className = options.className;
    if (options.id) {
        element.id = options.id;
    }
    if (options.text) {
        element.innerHTML = options.text;
    }
    return element;
};
function createButtonNode(text, id) {
    const wrapper = createElement("div", {
        className: "button_new",
        id,
    });
    const left = createElement("div", { className: "left" });
    const right = createElement("div", { className: "right" });
    const caption = createElement("div", {
        className: "caption",
        text,
    });
    wrapper.appendChild(left);
    wrapper.appendChild(right);
    wrapper.appendChild(caption);
    return wrapper;
}
export { createButtonNode };
