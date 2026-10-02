"use strict";

window.onload = main;

function main() {
    const names = ["text", "lr", "colors", "profile", "choices", "todo"];

    for (const name of names) {
        document.querySelector("#" + name + "Button").onclick = function () {
            showTab(name);
        };
    }

    showTab("text");
}

function showTab(name) {
    const screens = document.querySelectorAll(".screen");
    const buttons = document.querySelectorAll("nav button");

    for (const screen of screens) {
        screen.hidden = screen.id !== name;
    }

    for (const button of buttons) {
        const selected = button.id === name + "Button";
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", selected);
    }
}
