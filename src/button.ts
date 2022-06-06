const createElement = <T>(tag, options): T => {
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

function createButtonNode(text?: string, id?: string) {
    const wrapper = createElement<HTMLDivElement>("div", {
        className: "button_new",
        id,
    });
    const left = createElement<HTMLDivElement>("div", { className: "left" });
    const right = createElement<HTMLDivElement>("div", { className: "right" });
    const caption = createElement<HTMLDivElement>("div", {
        className: "caption",
        text,
    });

    wrapper.appendChild(left);
    wrapper.appendChild(right);
    wrapper.appendChild(caption);

    return wrapper;
}

export { createButtonNode };
