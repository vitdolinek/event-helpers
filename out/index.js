import { handleClick } from "./action.js";
import { createButtonNode } from "./button.js";
const root = document.getElementById("app");
for (let i = 1; i < 9; i++) {
    const button = createButtonNode(`Sound ${i}`, i.toString());
    button.addEventListener("click", handleClick);
    root.appendChild(button);
}
