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
setupChoices();
setupTodo();
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

function setupChoices() {
    document.querySelector("#printChoicesButton").onclick = function () {
        const camera1 = document.querySelector('input[name="camera1"]:checked').value;
        const camera2 = document.querySelector("#camera2").value;
        document.querySelector("#choicesOutput").textContent =
            "You chose " + camera1 + " for #1 and " + camera2 + " for #2.";
    };
}

function setupTodo() {
    const input = document.querySelector("#todoInput");
    const list = document.querySelector("#todoList");

    function addItem() {
        const text = input.value.trim();
        if (text === "") {
            return;
        }

        const item = document.createElement("li");

        const label = document.createElement("span");
        label.textContent = text;

        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "removeItem";
        remove.textContent = "×";
        remove.setAttribute("aria-label", "Delete " + text);
        remove.onclick = function (event) {
            event.stopPropagation();
            item.remove();
        };

        item.onclick = function () {
            item.classList.toggle("checked");
        };

        item.append(label, remove);
        list.append(item);
        input.value = "";
        input.focus();
    }

    document.querySelector("#todoAddButton").onclick = addItem;
    input.onkeydown = function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    };
}