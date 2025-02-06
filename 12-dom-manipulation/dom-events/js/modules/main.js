// Global variables
let button = document.querySelector("button");
let input = document.querySelector("#user-input");
let listItems = getShoppingListItems();
let ul = document.querySelector("#shopping-list");
let delBtns = ul.querySelectorAll("button");

listItems.forEach(el => addToggleDoneEvent(el));
delBtns.forEach(el => addDeleteItemEvent(el));

// Methods
function addListItem() {
    let text = input.value;
    if (text) {
        let li = createListElement(text);
        ul.appendChild(li);
        input.value = "";
    }
}

function createListElement(text) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.appendChild(createDelBtn());
    addToggleDoneEvent(li);
    return li;
}

function createDelBtn() {
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.textContent = "Delete";
    addDeleteItemEvent(delBtn);
    return delBtn;
}

function getShoppingListItems() {
    let shoppingList = document.querySelector("#shopping-list");
    return shoppingList.querySelectorAll("li");
}

// Events
button.addEventListener("click", function() {
    addListItem();
});

input.addEventListener("keyup", ({key}) => {
    if (key ==="Enter") {
        addListItem();
    }
});

function addToggleDoneEvent(el) {
    el.addEventListener('click', (e) => {
        e.target.classList.toggle("done");
    });
}

function addDeleteItemEvent(el) {
    el.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
}