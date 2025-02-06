// DOM Selectors
//--------------
// getElementsByTagName
let liItemEls = document.getElementsByTagName('li');
for (let item of liItemEls) {
    item.classList.add('done');
}

// getElementsByClassName
let secondEls = document.getElementsByClassName('second');
for (let item of secondEls) {
    item.classList.add('important');
}
// getElementById
let firstEl = document.getElementById("first");
let extraText = document.createTextNode(" Here is some more text for the #first paragraph.");
firstEl.appendChild(extraText);
// querySelector
let headingEl = document.querySelector('h1');
headingEl.appendChild(
    document.createTextNode(" - This is added to the main heading")
);
// querySelectorAll
let listItems = document.querySelectorAll('li');
for (let item of listItems) {
    if (item.getAttribute('class') == 'done') {
        item.appendChild(
            document.createTextNode(" - done")
        );
        item.style.color = 'red';
    }
}
// getAttribute
// setAttribute// ##Changing Styles
// style.{property} //ok - best to not use and change class instead where possible.
for (let [index, item] of listItems.entries()) {
    if (index % 2 == 0) {
        item.setAttribute('class', 'not-done');
        item.style.color = 'blue';
    }
}

// className //best
// classList //best. In at least nearly all cases classList is better than className
// classList.add
// classList.remove
for (let item of listItems) {
    console.log('className: ' + item.className);
    console.log('classList: ' + item.classList);
    item.classList.add('anotherClass');
    console.log('classList: ' + item.classList);
    console.log(item.classList);
    item.classList.remove('anotherClass');
    console.log('classList: ' + item.classList);
}

// classList.toggle
for ( let item of listItems) {
    item.addEventListener("click", toggleDone);
}

function toggleDone(event) {
    event.currentTarget.classList.toggle('done');
}

// ##Bonus
// innerHTML //DANGEROUS
//Don't use innerHTML. Use element.textContent instead.

// parentElement
console.log(firstEl.parentElement);
// children
console.log(firstEl.parentElement.children);

// ##It is important to CACHE selectors in variables